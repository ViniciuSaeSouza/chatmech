

export type ClienteType = {
	idCadastro: number,
	nome: string,
	email: string,
	senha: string,
	cep: string
}

export type LoginType = {
	cep: string,
	idCadastro: number,
	nome: string,
	email: string,
	senha: string,
}