import ora from 'ora'
import progress from 'request-progress'

export default function logRequestProgress(message: string, request: Request) {
  const spinner = ora(message).start()

  progress(request)
    .on('progress', state => {
      spinner.text = `${message}: ${Math.round(state.percent * 100)}%`
    })
    .on('error', err => {
      spinner.fail(`${message}, ${err}`)
    })
    .on('end', () => {
      spinner.succeed(message)
    })

  return request
}
