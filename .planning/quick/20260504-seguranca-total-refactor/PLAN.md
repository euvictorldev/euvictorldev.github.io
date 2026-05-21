# Plan: Refactor Segurança Total Service Page

The goal is to create a dedicated page for "Segurança Total" that matches the structure and design of "Robôs de Atendimento", using the provided content.

## Steps

1. **Create `src/pages/SegurancaTotal.tsx`**: 
   - Copy the structure from `RobosDeAtendimento.tsx`.
   - Update `Plan` data with the provided security tiers.
   - Update `addons` with the provided extras.
   - Update `trustPoints` (Why Choose Me).
   - Update `Monthly Plan` (Seguro Digital).
   - Adapt `requirementsFAQ` and `techStack` for security services.

2. **Update `src/pages/ServiceDetail.tsx`**:
   - Import `SegurancaTotal`.
   - Add a condition in the `ServiceDetail` component to return `<SegurancaTotal />` when the slug is `seguranca-total`.

3. **Verification**:
   - Ensure the new page renders correctly.
   - Check that all content matches the user request.
   - Verify responsiveness.

## Content Mapping

### Plans
- **Cadeado Verde**: R$ 250, 2-5 days. SSL, Cloudflare basic.
- **Blindagem de Dados**: R$ 650, 7-12 days. WAF, Backups.
- **Alarme de Invasão**: R$ 1.150, 15-25 days. Deep clean, AI Alarm.

### Seguro Digital (Monthly)
- R$ 159,90/mês. 24h surveillance, Backup management, Health reports, 2h quick fixes.

### Addons
- Professional Email: +R$ 150
- Virus Cleaning: +R$ 500
- Domain Pointing: +R$ 100
