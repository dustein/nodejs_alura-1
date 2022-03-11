//não resolvido problema de compatibilidado com o jest, vou continuar pra não ficar preso nesse problema muito tempo mais
import { pegaArquivo } from '../index.js';

const arrayesult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegaArquivo :: ', () => {
    it('deve ser uma função :', () => {
        expect(typeof pegaArquivo).toBe('function');
    })
    it('deve retornar array com resultados', async () => {
        const resultado = await pegaArquivo(C:\Users\DuStein\Documents\alura_nodejs_1\test\arquivos\file1.md)
        expect(resultado).toEqual(arrayesult)
    })
})