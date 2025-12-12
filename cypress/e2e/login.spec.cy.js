describe('Teste de Login', () => {
    it('Deve permitir que o usuário faça login', () => {
      // Abrir o site que você quer testar
      cy.visit('http://127.0.0.1:5500/html/index.html')
      
      // Verificar se a página inicial carrega corretamente
      cy.url().should('include', '/index.html') // Verifica se a URL contém 'index.html'
      
      /* ================================== */

      /* TESTES DA TELA DE LOGIN */

      // Preencher os campos do login
      cy.get('#username').type('admin'); 
      cy.get('#password').type('senha123')
  
      // Clicar no botão de login
      cy.get('#btnLogin').click()

      // verificar se a mensagem de sucesso aparece
      cy.get('#error-msg').should('contain', 'Usuário ou senha incorretos.')
      // verificar se a mensagem de sucesso desaparece depois de 2 segundos
      cy.get('#error-msg').should('contain', '')

      // reseta os campos
      cy.get('#username').clear();
      cy.get('#password').clear();
      
      /* ================================== */
      
      // preencher apenas um campo do login
      cy.get('#username').type('admin');
      
      // Clicar no botão de login
      cy.get('#btnLogin').click()
      
      // verificar se a mensagem de erro aparece
      cy.get('#error-msg').should('contain', 'Usuário ou senha incorretos.')
      // verificar se a mensagem de erro desaparece depois de 2 segundos
      cy.get('#error-msg').should('contain', '')
      
      // reseta os campos
      cy.get('#username').clear();

      /* ================================== */
      
      // preencher apenas um campo do login
      cy.get('#password').type('senha123')

      // Clicar no botão de login
      cy.get('#btnLogin').click()
      
      // verificar se a mensagem de erro aparece
      cy.get('#error-msg').should('contain', 'Usuário ou senha incorretos.')
      // verificar se a mensagem de erro desaparece depois de 2 segundos
      cy.get('#error-msg').should('contain', '')
      
      // reseta os campos
      cy.get('#password').clear();
            
      /* ================================== */
      
      // fazer login com os campos vazios

      // Clicar no botão de login
      cy.get('#btnLogin').click()
      
      // verificar se a mensagem de erro aparece
      cy.get('#error-msg').should('contain', 'Usuário ou senha incorretos.')
      // verificar se a mensagem de erro desaparece depois de 2 segundos
      cy.get('#error-msg').should('contain', '')

      // clicar no botão de cadastro
      cy.get('#page_cad').click()
      
      /* ================================== */

      /* TESTES DO CADASTRO */

      // Verificar se a página de cadastro carrega corretamente
      cy.url().should('include', '/cadastro_login.html') // Verifica se a URL contém 'cadastro_login.html'
      
      // Preencher apenas um campo do cadastro
      cy.get('#username').type('admin');
      
      // clicar no botão de cadastro
      cy.get('#btnRegister').click()
      
      // verificar se a mensagem de sucesso aparece
      cy.get('#error-msg').should('contain', 'Por favor, preencha todos os campos.')
      // verificar se a mensagem de sucesso desaparece depois de 2 segundos
      cy.get('#error-msg').should('contain', '')

      // reseta os campos
      cy.get('#username').clear();
 
      /* ================================== */
      
      // Preencher apenas um campo do cadastro
      cy.get('#password').type('senha123')
      
      // clicar no botão de cadastro
      cy.get('#btnRegister').click()
      
      // verificar se a mensagem de sucesso aparece
      cy.get('#error-msg').should('contain', 'Por favor, preencha todos os campos.')
      // verificar se a mensagem de sucesso desaparece depois de 2 segundos
      cy.get('#error-msg').should('contain', '')

      // reseta os campos
      cy.get('#password').clear();

      /* ================================== */
      
      // Preencher apenas um campo do cadastro
      cy.get('#confirm-password').type('senha123')
      
      // clicar no botão de cadastro
      cy.get('#btnRegister').click()
      
      // verificar se a mensagem de sucesso aparece
      cy.get('#error-msg').should('contain', 'Por favor, preencha todos os campos.')
      // verificar se a mensagem de sucesso desaparece depois de 2 segundos
      cy.get('#error-msg').should('contain', '')

      // reseta os campos
      cy.get('#confirm-password').clear();
  
      /* ================================== */
      
      // Preencher apenas dois campo do cadastro
      cy.get('#username').type('admin');
      cy.get('#password').type('senha123')
      
      // clicar no botão de cadastro
      cy.get('#btnRegister').click()
      
      // verificar se a mensagem de sucesso aparece
      cy.get('#error-msg').should('contain', 'Por favor, preencha todos os campos.')
      // verificar se a mensagem de sucesso desaparece depois de 2 segundos
      cy.get('#error-msg').should('contain', '')

      // reseta os campos
      cy.get('#username').clear();
      cy.get('#password').clear();

      /* ================================== */
      
      // Preencher apenas dois campo do cadastro
      cy.get('#username').type('admin');
      cy.get('#confirm-password').type('senha123')
      
      // clicar no botão de cadastro
      cy.get('#btnRegister').click()
      
      // verificar se a mensagem de sucesso aparece
      cy.get('#error-msg').should('contain', 'Por favor, preencha todos os campos.')
      // verificar se a mensagem de sucesso desaparece depois de 2 segundos
      cy.get('#error-msg').should('contain', '')

      // reseta os campos
      cy.get('#username').clear();
      cy.get('#confirm-password').clear();

      /* ================================== */
      
      // Preencher apenas dois campo do cadastro
      cy.get('#password').type('senha123')
      cy.get('#confirm-password').type('senha123')
      
      // clicar no botão de cadastro
      cy.get('#btnRegister').click()
      
      // verificar se a mensagem de sucesso aparece
      cy.get('#error-msg').should('contain', 'Por favor, preencha todos os campos.')
      // verificar se a mensagem de sucesso desaparece depois de 2 segundos
      cy.get('#error-msg').should('contain', '')

      // reseta os campos
      cy.get('#password').clear();
      cy.get('#confirm-password').clear();

      /* ================================== */
      
      // Preencher os campo do cadastro
      cy.get('#username').type('admin');
      cy.get('#password').type('senha123')
      cy.get('#confirm-password').type('senha123')
      
      // clicar no botão de cadastro
      cy.get('#btnRegister').click()
      
      // verificar se a mensagem de sucesso aparece
      cy.get('#error-msg').should('contain', 'Cadastro realizado com sucesso!')
      // verificar se a mensagem de sucesso desaparece depois de 2 segundos
      cy.get('#error-msg').should('contain', '')
      
      /* ================================== */
      
      // verificar se o usuário já existe
      cy.get('#username').type('admin');
      cy.get('#password').type('senha123')
      cy.get('#confirm-password').type('senha123')
      
      // clicar no botão de cadastro
      cy.get('#btnRegister').click()
      
      // verificar se a mensagem de sucesso aparece
      cy.get('#error-msg').should('contain', 'Usuário já cadastrado.')
      // verificar se a mensagem de sucesso desaparece depois de 2 segundos
      cy.get('#error-msg').should('contain', '')
      
      // clicar no botão de login
      cy.get('#page_login').click()
      
      /* ================================== */

      /* TESTE PARA LOGAR NA CONTA DEPOIS DO CADASTRP CORRETAMENTE */

      // Verificar se a página de cadastro carrega corretamente
      cy.url().should('include', '/index.html') // Verifica se a URL contém 'cadastro_login.html'

      // Preencher os campos do login
      cy.get('#username').type('admin');
      cy.get('#password').type('senha123')
  
      // Clicar no botão de login
      cy.get('#btnLogin').click()
  
      // Verificar se a página redireciona para a área do usuário
      cy.url().should('include', '/menu_home.html') // Verifica se a URL contém 'menu_home.html'
    });
  });
  