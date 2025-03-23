#!/usr/bin/env node

function main() {
  const args = process.argv.slice(2)

  if (args.includes('--help') || args.includes('-h')) {
    console.log('Usage: my-cli [name]')
    console.log("Prints 'Hello [name]!'")
    return
  }

  const name = args[0] || 'World'
  console.log(`Hello ${name}!`)
}

main()
