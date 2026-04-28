import pytest
from app import app

@pytest.fixture
def client():
    # Cliente de teste providenciado pelo Flask
    with app.test_client() as client:
        yield client

def test_listar_produtos(client):
    resposta = client.get('/produtos')
    
    # Validação da Camada HTTP
    assert resposta.status_code == 200
    
    # Validação Ativa do Corpo da Resposta
    dados = resposta.get_json()
    assert isinstance(dados, list)
    assert len(dados) == 2
    
    # Validando estrutura de retorno do primeiro item
    primeiro_produto = dados[0]
    assert 'id' in primeiro_produto
    assert 'nome' in primeiro_produto
    assert 'preco' in primeiro_produto
    assert primeiro_produto['nome'] == "Notebook"