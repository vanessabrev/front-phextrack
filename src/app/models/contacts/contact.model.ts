
// Esse modelo sera utilizado no front para tratar as informaceos organizadas em arrays dentro dessa aplicacao.
export class Contact {
  address: string;
  phones: string;
  emails: string;
}

// Esse modelo sera o contrato entre o front e api.
// Por enquanto sera utilizado para trazer as informações da api e o servico concatenate-text.service organizara
// para a estrutura do model acima.
export class ContactResponse {
  address: string;
  phones: string;
  emails: string;
}