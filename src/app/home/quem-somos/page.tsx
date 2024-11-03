import CabecalhoLogin from '@/components/CabecalhoLogin/CabecalhoLogin'
import Footer from '@/components/Footer/Footer'
import Image from 'next/image'
import React from 'react'
import dodock from "@/images/dodock.png"
import saes from "@/images/saes.png"
import {Roboto, Inter} from 'next/font/google'

export default function QuemSomos() {
  return (
	<div>
		<CabecalhoLogin/>
		<div className='h-[100vh]'>
			<div className='flex  justify-around bg-gray-400/10 max-w-fit gap-x-80 items-center mx-auto px-4 py-8 rounded-lg shadow-lg shadow-black/60'>
				<div className=''>
					<Image src={dodock} alt='Imagem do João Victor'/>
					<p className=''>Nome: João Victor Michaeli</p>
					<p className=''>Rm: 555678</p>
					<p>Turma: 1TDSPK</p>
					<p>GitHub: <a href="https://github.com/JoaoMichaeli">JoaoMichaeli</a></p>
				</div>
				<div className=''>
					<Image src={saes} alt='Imagem do Vinícius Saes'/>
					<p className=''>Nome: Vinícius Saes de Souza</p>
					<p>Rm: 554456</p>
					<p>Turma: 1TDSPK</p>
					<p>GitHub: <a href="https://github.com/ViniciuSaeSouza">ViniciuSaeSouza</a></p>
				</div>
			</div>
		
		</div>
		<Footer/>
	</div>
  )
}
