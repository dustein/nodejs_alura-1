import chalk from 'chalk';
import fs from 'fs';
import path from 'path';

//pro __dirname funcionar no Replit
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);


function extrairLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while((temp = regex.exec(texto))!== null) {
        arrayResultados.push({ [temp[1]]: temp[2] })
    }
    return arrayResultados.length === 0 ? 'Não há lins no arquivo' : arrayResultados;
}

function trataErro(erro) {
        throw new Error(chalk.red(erro.code, ' Erro - não existe o arquivo'));
}

async function pegaArquivo(caminhoDeArquivo) {
    // const caminhoAbsoluto = path.join(__dirname, '..', caminho);    
    const caminhoAbsoluto = path.join("/home/runner/AluraNodeJS1biblioteca", caminhoDeArquivo, "..")
    const encoding = 'utf-8';
    const arquivos = await fs.promises.readdir(caminhoAbsoluto, { encoding });
    console.log('arquivos', arquivos);
    
}

//usando async await - try catch --------------------
// async function pegaArquivo(caminhoDeArquivo) {
//     try {
//         const texto = await fs.promises.readFile(caminhoDeArquivo, 'utf-8')
//         return extrairLinks(texto);
//     } catch(erro) {
//         trataErro(erro)
//     } finally {
//         console.log(chalk.red.underline("!!! Programa encerrado !!!"))
//     }
// }

//usando promise ------------------------------------
// function pegaArquivo(caminho) {
//     fs.promises
//     .readFile(caminho, 'utf-8')
//     .then((texto) => console.log(chalk.green(texto)))
//     .catch((err) => trataErro(err))
// }

//primeira forma básica -----------------------------
// function pegaArquivo(caminho) {
//         fs.readFile(caminho, 'utf-8', (err, texto) => {
//                 if(err) {
//                         trataErro(err);
//                 }
//                 console.log(chalk.green(texto));
//         })
// }

// pegaArquivo('./arquivos/file1.md')
export { pegaArquivo };


