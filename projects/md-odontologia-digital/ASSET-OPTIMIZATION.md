# Plano de Otimização de Assets

Otimização de performance para o projeto MD Odontologia Digital.

## 1. Problema Atual
- Assets estáticos pesados (especialmente vídeos `.mp4` totalizando ~6.4MB) no repositório.
- Falta de um CDN para servir conteúdo multimídia de forma performática.

## 2. Estratégia
- **Imagens**: Manter no repositório, mas utilizar compressão otimizada (WebP).
- **Vídeos**: Migrar para armazenamento externo ou utilizar recursos de otimização de plataforma (ex: Vercel Blobs ou Cloudinary).
- **Processo**:
    - Converter imagens `.jpg` para `.webp`.
    - Configurar um script de build para realizar essa conversão automaticamente.

## 3. Próximos Passos
- Investigar a viabilidade de usar `vercel-blob` ou similar.
- Implementar script de otimização de imagem.
