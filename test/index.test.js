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
    it('deve retornr mensagem "não há links"', async () => {
        const resultado = await pegaArquivo(C:\Users\DuStein\Documents\alura_nodejs_1\test\arquivos\file1-nolinks.md)
        expect(resultado).toBe('não há links');
    })
    it('deve lançar um erro na falta de arquivo', async () => {
        await expect(pegaArquivo('C:\Users\DuStein\Documents\alura_nodejs_1/test/arquivos')).rejects.toThrow(/não há arquivo no caminho/)
    })
    it('deve resolver a função com sucesso', async () => {
        await expect(pegaArquivo('C:\Users\DuStein\Documents\alura_nodejs_1/test/arquivos/texto1.md')).resolves.toEqual(arrayResult)
      })
})