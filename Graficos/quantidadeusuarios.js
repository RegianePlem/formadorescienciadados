async function quantidadeusuarios() {
const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/esportes/esportes-mais-praticados.json'
const res = await fetch (url)
const dados = await res.json ()
const nomedasredes = Object.keys (dados)
const quantidadeusuarios = Object.values (dados)
const data = [
    {
      x: nomeDasRedes,
      y: quantidadeUsuarios,
      type: 'bar'
    }
  ]

  const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementById('graficos-container').appendChild(grafico)
Plotly.newPlot(grafico, data)

}

quantidadeUsuarios()

