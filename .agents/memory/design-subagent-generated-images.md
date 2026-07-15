---
name: Design subagent generated-image IP risk
description: Images produced by generateImage for marketing/brand sites can accidentally include real trademarked logos (e.g. Nike, Under Armour) or a recognizable celebrity likeness, even when the prompt asked for an original/generic brand.
---

When a DESIGN subagent (or direct generateImage calls) produces photographic product shots or "athlete" lifestyle imagery for a brand site, visually inspect every generated image before shipping — don't just trust the prompt intent.

**Why:** On a "SOVARO" travel-for-athletes site build, generated hero/journal/product images came back with a clearly readable Nike swoosh, an Under Armour logo, and a hero athlete whose face closely resembled a real, recognizable professional athlete (likely Cristiano Ronaldo). None of this was requested — it emerged from the model's training bias toward real athletic-brand aesthetics. Shipping it would have created real trademark/personality-rights exposure for the user's business site.

**How to apply:** After any generateImage/design-subagent batch for apparel, sports, or lifestyle photography, open each output image and check for (a) legible brand logos/wordmarks, (b) distinctive brand silhouettes (e.g. swoosh shapes), and (c) faces that resemble real known people. If found, regenerate with explicit negative instructions ("no logos, no text, no brand marks, generic/anonymous face or face turned away/obscured") before presenting the artifact.
