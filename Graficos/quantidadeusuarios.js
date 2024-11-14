async function quantidadeusuarios() {
const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/esportes/esportes-mais-praticados.json'
const res = await fetch (url)
const dados = await res.json ()
}
