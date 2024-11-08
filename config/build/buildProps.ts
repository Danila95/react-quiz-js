import os from 'os'

export const buildProps = () => {
	console.log('Характеристика компьютера')
	console.log('========================================================')
	console.log(`Операционная система OS: ${os.platform()}\n`)
	console.log(`Архитектура процессора ARCH: ${os.arch()}\n`)
	console.log('Информация по процессорам CPUS:\n')
	console.log(os.cpus())
	console.log(
		`Свободно памяти Free memory: ${(os.freemem() / 1024 / 1024).toFixed(2)} Mb\n`
	)
	console.log(
		`Всего памяти  Total memory: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} Gb\n`
	)
	console.log(`Домашняя директория Home Dir: ${os.homedir()}\n`)
	console.log(
		`Время работы On work: ${(os.uptime() / 60 / 60).toFixed(2)} hours\n`
	)
	console.log('========================================================')
	// счетчик остановки скрипта
	setTimeout(() => {
		console.log('Остановка скрипта')
		return process.exit(1)
	}, 2000)
}
