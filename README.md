# MOLI Homepage v31 — UI Integration Pass

This version deliberately avoids adding new content.
All changes are focused on design quality and UI consistency.

## Locked direction
- PRO = GM-520
- PLUS = Scorpion
- ULTRA = Gatling
- JG MOLI / Beyond Gravity is the single brand logo system
- Black / graphite / white / cyan remains the brand palette

## Key UI changes

### Product imagery
Product introduction images are now visually integrated into the page:
- softer white/graphite display surface
- subtle cyan halo
- light technical grid
- consistent border / shadow
- consistent model chip
- quieter disclaimer treatment

The goal is to make product photography feel like part of the interface rather than pasted product assets.

### Brand consistency
Text-only company-name treatments are replaced with the official JG MOLI logo lockup wherever practical.

### Card system
Specifications, compare elements and support cards now share:
- the same border logic
- the same hover behaviour
- the same corner radius
- the same cyan accent

### Section flow
Subtle transition lines and spacing now connect large sections more naturally.

### Interaction polish
Buttons, links, spec cards and FAQ elements receive restrained hover states.

## Rule for future versions
From v31 onward, revisions should primarily improve:
- visual hierarchy
- spacing
- image integration
- typography
- interactions
- mobile behaviour
- conversion UI

Avoid adding new homepage sections unless there is a clear conversion or product-information reason.


## v32 Detail Cleanup
- Removed duplicate product chips and overlapping captions.
- Each product image now has only one webpage-controlled model label.
- Removed duplicate platform-reference overlays from the webpage.
- Fixed header logo clipping/collapse.
- Added overflow safeguards for major headings.
- Tightened image-card radius, spacing, and mobile behavior.
- No new content added: this pass is UI cleanup only.


## v33 — Unified Product Imagery + Visual Continuity

### Product image system
All three main product images now use:
- identical 1:1 canvas ratio
- the same neutral light background
- identical framing scale
- no product title or web caption inside the image
- product name / model remains outside the image in the page UI

### Visual continuity
Added a restrained visual story module between Product Range and Finder:
- Work
- Play
- Multi-screen

This keeps the cinematic feel from the hero alive without changing the underlying page architecture.

### Ultra / Gatling verified data
Official supplier data added:
- 3 × 32-inch or 1 × 49-inch display support
- optional custom 3 × 34-inch bracket
- 140–160 cm length
- 150–220 cm height
- 88 cm width
- 100 cm track width
- 110–240V AC input
- 12V / 20A output

A supplier feature diagram is also added inside the Ultra detail area.


## v34 — Later-page visual polish
- Added visual anchors to Finder, Pricing/Finance, Fit/Access and Ownership where those sections exist.
- Added a three-product visual strip to Compare.
- Kept FAQ intentionally text-led.
- Reused existing MOLI/supplier imagery only; no unrelated stock imagery added.
- Continued the same dark / cyan / premium hardware visual language from the Hero.
- Standardised external titles and avoided titles embedded inside product imagery.


## v35 — Clean Build
- Removed the Hero 01/02/03/04 feature strip.
- Cropped the left Hero image to hide the baked-in concept-branding box.
- Rebuilt Product Range from scratch to remove duplicate PLUS/ULTRA modules.
- PRO / PLUS / ULTRA now each have exactly one image and one product module.
- All product images use identical 1:1 framing and similar subject scale.
- Ultra now uses the higher-resolution Gatling image instead of the old thumbnail.
- Every product uses exactly six core specification cards.
- Core spec cards have identical height, label spacing and description density.
- Full specifications are collapsed by default so product modules remain visually equal.


## v36 — Harmony Pass
- Hero headline widened into two deliberate horizontal lines.
- Left Hero crop increased to remove the baked JG MOLI concept-branding box from view.
- Added a subtle image veil so the hero copy and photography feel like one composition.
- PRO / PLUS / ULTRA product subjects enlarged inside identical canvases.
- PLUS and ULTRA images rebuilt from tighter subject crops to reduce excessive white space.
- Product image/text columns balanced 50/50.
- Spec cards retain equal height and equal information density.
- Reduced the sense of “image block + text block” by refining scale, spacing and typography.


## v37 — Gaming UI Hero Pass
- Locked role: AAA gaming interface + premium gaming hardware brand design.
- Hero text is truly centered.
- "Same cockpit." is white.
- "Different mode." is JG MOLI cyan.
- Hero title uses a tighter, larger, game-title treatment.
- Background split is treated as one cinematic key art composition.
- Added a subtle central cyan seam and lightweight HUD labels.
- CTA buttons redesigned to feel like a premium game menu, not standard corporate buttons.
- Existing logo asset remains fixed; no AI-redrawn logo is used.


## v38 — Streamlined Gaming UI
- Replaced ULTRA hero/product image with the user's first, highest-resolution Gatling image.
- Removed the duplicate Family intro module.
- Removed the extra Visual Story module.
- Removed redundant visual-anchor modules added to Finder / Pricing / Fit / Ownership.
- Removed decorative Compare image strip while preserving the functional comparison table.
- Removed unnecessary section-divider noise.
- Kept the core conversion journey:
  Hero → Product Range → Compare → Pricing/Ownership → Brand/About → FAQ → Demo.
- Page rhythm tightened so the site feels like a premium gaming hardware landing page rather than a long presentation deck.


## v39 — Hero Soft Blend
- Removed the obvious 50/50 hero split.
- Overlapped both hero images through a broad feathered blend zone.
- Removed legacy seam/divider treatments.
- Darkened and desaturated the left cockpit image so it recedes.
- Preserved more RGB/lifestyle energy on the right image.
- Added a very subtle cyan atmosphere at the transition rather than a visible cyan line.
- Kept the centered white/cyan headline treatment and CTA hierarchy.
- Added a mobile-specific stacked cinematic blend.


## v40 — Contrast / Interaction / Scale Pass
- Fixed low-contrast typography in the light MOLI Experience section.
- Timeline modes are now real clickable buttons; the invisible range slider no longer captures pointer input.
- Added hover / focus / active states to Focus, Play, Movie and Recharge.
- PLUS product artwork was rebuilt at a significantly larger subject scale.
- ULTRA artwork was rebuilt from the high-resolution Gatling source and fills the 1:1 frame much more confidently.
- Removed legacy cyan divider pseudo-elements from the Hero.
- Hero now blends the two images with feathered overlap only; no blue seam is used.


## v42 — Player Proposition + Timeline Fix
- Hero proposition changed to:
  IT'S NOT JUST A CHAIR.
  YOUR COCKPIT.
- First line white, second line MOLI cyan.
- Hero returned to a centered gaming key-art composition.
- Found the timeline failure source: an earlier missing `reserve-form` caused JavaScript execution to stop before timeline listeners were registered.
- Added null guards to disappearing form elements.
- Rebuilt timeline switching with null-safe DOM updates.
- Removed dependency on the hidden timeline range slider.
- Timeline tabs now support click, touch/pointer and keyboard activation.
- Timeline initializes itself explicitly.
- JavaScript validation result: JS syntax OK


## v43 — Color-led Player Hero
- Hero text moved to the vertical middle, slightly left of centre.
- Reduced the previous blanket black overlay significantly.
- Gaming side is brighter and more saturated so RGB and hardware colour pull the player into the page.
- Work/cockpit side remains readable but no longer feels greyed out.
- Typography is reduced enough to coexist with the key art rather than cover it.
- White first headline + MOLI cyan second headline preserved.
- No central blue divider line.
- Local gradients are used only where needed for text legibility.


## v44 — Finance section split
- Preserves the preferred Hero direction from v43.
- Finance introduction and payment calculator now read as two distinct chapters.
- Lower planner zone uses a subtly different dark surface, top separation and stronger spacing.
- Calculator is treated as a deliberate configurator panel rather than a floating card.
- Two-column desktop hierarchy; stacked mobile hierarchy.


## v50 — Unified JG MOLI logo system
- Replaced website brand/logo usage with the newly generated clean black-background JG MOLI logo.
- Cropped unnecessary outer whitespace from the source image before web use.
- Removed pseudo-elements / clipping behavior that created white or grey ghost edges.
- Header, About/Company and Footer now share one consistent logo treatment.
- Header logo kept compact so it supports the gaming UI instead of competing with Hero/product imagery.

## v66 — Loadout Selector refinement
- Tightened the cockpit finder vertical rhythm and reduced oversized heading emphasis.
- Moved the 01/02/03 path directly above the controls and renamed it USE / DISPLAY / BUDGET.
- Kept the white configurator as the primary interaction surface.
- Rebuilt the result card as a visual match card with a subtle cockpit product silhouette.
- Simplified the reading order to understand → select → match → explore.
