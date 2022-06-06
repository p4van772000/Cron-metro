Interação JS com HTML e CSS.

    - Modulação:
        #importação e exportação de variáveis e funções> 
            *Melhorar organização do código com a separação de especialidades separadas dentro do código.
    
    -Refatoração: re-estruturar o código de maneira que fique mais organizado e ainda funcional.
                *Fazer depois que o código já estiver funcionando, e assim tentar deixar o código mais
                declarativo.
            
    -Injeção de dependências : 
        Durante a modulação, tem-se que usar funções que estão sendo importadas/exportadas entre os
        arquivos, porém, muitas vezes, a variável necessária para executar a função no primeiro arquivo,
        não existe no segundo, então precisa-se criar um objeto no segundo arquivo, contendo essas 
        objeções como propriedades. Assim, será possível executar essa função com essas propriedades como parametros.

    -Funções Construtivas : Criar a função que possui nela outras funções, objetos ou variáveis que serão executados em outro código(exportação). Nela, serão retornadas o que será usado no outro código. Na maioria das vezes são funções que serão executadas como propriedades de um objeto:
        Cria-se uma variável que irá conter a função construtora que está sendo importada, e assim, pode-se acessar, as outras funções criadas dentro da construtora, como propriedade. Acessando elas em qualquer lugar do código.
