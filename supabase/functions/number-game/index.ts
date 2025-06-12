import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

serve(async (req) => {
  try {
    const { number } = await req.json()
    
    if (typeof number !== 'number' || number < 1 || number > 100) {
      return new Response(
        JSON.stringify({ message: 'Please provide a number between 1 and 100' }),
        { headers: { 'Content-Type': 'application/json' }, status: 400 }
      )
    }

    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1
    
    let message = ''
    if (number === randomNumber) {
      message = 'Congratulations! You guessed the correct number!'
    } else if (number < randomNumber) {
      message = `Too low! The number was ${randomNumber}`
    } else {
      message = `Too high! The number was ${randomNumber}`
    }

    return new Response(
      JSON.stringify({ message }),
      { headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Error processing request' }),
      { headers: { 'Content-Type': 'application/json' }, status: 400 }
    )
  }
}) 