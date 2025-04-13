import openai
import os
from config.constants import Constants

openai.api_key = Constants.OPEN_API_KEY


def chatgpt_pergunta(mensagem):
    """
    Envia uma mensagem para o ChatGPT utilizando um prompt padrão.

    Args:
        mensagem (str): A mensagem enviada pelo usuário.

    Returns:
        str: A resposta gerada pelo ChatGPT.
    """
    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",  # ou outro modelo disponível
            messages=[
                {"role": "system", "content": "Você é um assistente útil."},
                {"role": "user", "content": mensagem}
            ]
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        return f"Ocorreu um erro ao acessar a API: {e}"


def agent_peticao(documentos):
    """
    Agent que atua como advogado responsável por analisar documentos e elaborar uma petição inicial.

    O prompt interno orienta o agent a:
    - Atuar como um advogado altamente especializado.
    - Analisar minuciosamente os documentos apresentados.
    - Elaborar uma petição inicial detalhada, indicando o foro competente e a causa de pedir,
      fundamentada nos documentos apresentados.

    Args:
        documentos (str): Texto contendo os documentos para análise.

    Returns:
        str: Resposta da API contendo a petição inicial proposta.
    """
    prompt = (
        "Você é um advogado altamente especializado, responsável por analisar minuciosamente os documentos apresentados. "
        "Com base em seu profundo conhecimento jurídico, elabore uma petição inicial detalhada, informando o local do fórum competente, com base nos documentos fornecidos. Neles e somente neles, "
        "e apontando a causa raiz do litígio, de forma direcionada e fundamentada nos documentos a seguir:\n\n"
        f"{documentos}"
    )
    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": prompt},
                {"role": "user", "content": "Por favor, elabore a petição inicial conforme instruído."}
            ]
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        return f"Ocorreu um erro ao acessar a API: {e}"


if __name__ == '__main__':
    agent_peticao()
