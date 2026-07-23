# Image Assets Directory (`src/assets/images`)

This folder stores static images, graphics, SVG illustrations, and photo assets used across the FlexiFitPay landing page.

## Directory Structure:
- `src/assets/images/hero/`: Hero section images and background graphics.
- `src/assets/images/features/`: Feature mockups and dashboard graphics.
- `src/assets/images/testimonials/`: User avatars and testimonial photos.
- `src/assets/images/index.js`: Export map for clean image imports across components.

## Usage Example:
```javascript
import { images } from '@/assets/images';

<img src={images.hero.manWithPhone} alt="FlexiFitPay User" />
```
