const btn = document.getElementById('dice')
const adviceMessage = document.getElementById('advice')
const adviceId = document.getElementById('tittle')
const url = 'https://api.adviceslip.com/advice'

btn.addEventListener('click', async () => {
    const response = await fetch(url)
    const output = await response.json()

    const advice = output.slip.advice
    const id = output.slip.id

    adviceMessage.innerHTML = `"${advice}"`
    adviceId.innerHTML = `ADVICE #${id}`
})