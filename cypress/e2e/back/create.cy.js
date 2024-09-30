describe('Teste da API', () => {
    it('Deve criar um usuário com sucesso', () => {
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users', 
        body: {
          name: 'morpheus',
          job: 'leader'
        },
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(201); 
        expect(response.body).to.have.property('name', 'morpheus');
        expect(response.body).to.have.property('job', 'leader');
      });
    });
  });
  