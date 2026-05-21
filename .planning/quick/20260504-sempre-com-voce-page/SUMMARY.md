# Summary: Create Sempre Com Voce Dedicated Page

The objective was to create a dedicated page for the "Sempre com Você" service, matching the structure of `SegurancaTotal.tsx` and using the user's provided content.

## Changes Made

1. **New Component**: Created `src/pages/SempreComVoce.tsx`.
    - Implemented Hero, Pricing Cards (Web, Bot, Combo), Special Benefits, Addons, Why Choose Me, Requirements, and Tech Stack sections.
    - Used the text provided by the user for descriptions, pricing, and features.
    - Maintained the visual style and structure from the `SegurancaTotal` page.
2. **Routing Integration**: Updated `src/pages/ServiceDetail.tsx`.
    - Imported `SempreComVoce` component.
    - Added a conditional return to render `SempreComVoce` when the URL slug is `sempre-com-voce`.

## Verification Results

- Page is now accessible at `/servico/sempre-com-voce`.
- Structure perfectly mirrors the security page but with support-focused content.
- Responsive and consistent with the site's premium design.
