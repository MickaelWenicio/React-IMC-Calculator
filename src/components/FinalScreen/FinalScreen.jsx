import React from 'react'
import './FinalScreen.css'

const FinalScreen = () => {

  
  return (
    <div id='resultDiv'>
      <div id='infos'>
        <h1>Resultado:</h1>
        <p>14.53</p>
        <span>Você está acima do peso</span>
        <button>Conferir tabela</button>
      </div>
      <div id='tableDiv'>
        <table>
          <thead>
            <tr>
              <th>IMC</th>
              <th>Classificação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Menor que 18,5</td>
              <td>Baixo peso</td>
            </tr>
            <tr>
              <td>De 18,5 a 24,9</td>
              <td>Peso normal</td>
            </tr>
            <tr>
              <td>De 25 a 29,9</td>
              <td>Sobrepeso</td>
            </tr>
            <tr>
              <td>De 30 a 34,9</td>
              <td>Obesidade grau I</td>
            </tr>
            <tr>
              <td>De 35 a 39.9</td>
              <td>Obesidade grau II</td>
            </tr>
            <tr>
              <td>Igual ou maior que 40</td>
              <td>Obesidade grau III</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FinalScreen