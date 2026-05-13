import instaloader
import sys

def baixar_post(url, nome_arquivo):
    L = instaloader.Instaloader(
        download_videos=False,
        save_metadata=False,
        post_metadata_txt_pattern=""
    )

    try:
        # Extrai o shortcode da URL
        shortcode = url.split("/")[-2]
        post = instaloader.Post.from_shortcode(L.context, shortcode)
        
        # Baixa o post renomeando o diretório/arquivo
        L.download_post(post, target=nome_arquivo)
        print(f"Sucesso: {url} baixado como {nome_arquivo}")
    except Exception as e:
        print(f"Erro ao baixar {url}: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Uso: python script.py <URL_DO_INSTAGRAM> <NOME_DO_ARQUIVO>")
    else:
        link = sys.argv[1]
        nome = sys.argv[2]
        baixar_post(link, nome)