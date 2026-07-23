import React, { useEffect, useState } from 'react';

export const TransparentImage = ({ src, alt, className, style, threshold = 55 }) => {
  const [transparentSrc, setTransparentSrc] = useState(null);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = src;

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const width = canvas.width;
        const height = canvas.height;
        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;

        // Flood fill algorithm starting from outer image edges
        const visited = new Uint8Array(width * height);
        const queue = [];

        // Push outer border coordinates to queue
        for (let x = 0; x < width; x++) {
          queue.push(x, 0);
          queue.push(x, height - 1);
        }
        for (let y = 0; y < height; y++) {
          queue.push(0, y);
          queue.push(width - 1, y);
        }

        while (queue.length > 0) {
          const y = queue.pop();
          const x = queue.pop();
          const idx = y * width + x;

          if (visited[idx]) continue;
          visited[idx] = 1;

          const p = idx * 4;
          const r = data[p];
          const g = data[p + 1];
          const b = data[p + 2];

          // Check if outer pixel is dark background
          if (r < threshold && g < threshold && b < threshold) {
            data[p + 3] = 0; // Make outer background transparent

            // Push 4-way adjacent neighbor pixels
            if (x > 0) queue.push(x - 1, y);
            if (x < width - 1) queue.push(x + 1, y);
            if (y > 0) queue.push(x, y - 1);
            if (y < height - 1) queue.push(x, y + 1);
          }
        }

        // Multi-pass Edge Defringing & Soft Alpha Feathering
        for (let pass = 0; pass < 3; pass++) {
          const alphaSnapshot = new Uint8Array(width * height);
          for (let i = 0; i < width * height; i++) {
            alphaSnapshot[i] = data[i * 4 + 3];
          }

          for (let y = 1; y < height - 1; y++) {
            for (let x = 1; x < width - 1; x++) {
              const idx = y * width + x;
              const p = idx * 4;

              if (data[p + 3] > 0) {
                let hasTransparentNeighbor = false;
                for (let dy = -1; dy <= 1; dy++) {
                  for (let dx = -1; dx <= 1; dx++) {
                    if (dx === 0 && dy === 0) continue;
                    const nIdx = (y + dy) * width + (x + dx);
                    if (alphaSnapshot[nIdx] === 0) {
                      hasTransparentNeighbor = true;
                      break;
                    }
                  }
                  if (hasTransparentNeighbor) break;
                }

                if (hasTransparentNeighbor) {
                  const r = data[p];
                  const g = data[p + 1];
                  const b = data[p + 2];

                  // Eliminate dark crop halo fringe pixels completely
                  if (r < 95 && g < 95 && b < 95) {
                    data[p + 3] = 0;
                  } else {
                    // Soften boundary alpha for smooth, anti-aliased edge blending
                    data[p + 3] = Math.round(data[p + 3] * 0.45);
                  }
                }
              }
            }
          }
        }

        ctx.putImageData(imageData, 0, 0);
        setTransparentSrc(canvas.toDataURL('image/png'));
      } catch (err) {
        console.warn('TransparentImage flood fill error:', err);
      }
    };
  }, [src, threshold]);

  return (
    <img
      src={transparentSrc || src}
      alt={alt}
      className={className}
      style={style}
    />
  );
};
