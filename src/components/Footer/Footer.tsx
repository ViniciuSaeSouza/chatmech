"use client"
import Image from 'next/image'
import React, { DOMAttributes, MouseEventHandler } from 'react'
import Link from 'next/link'

import telefone from '@/images/icon-tel.png'
import github from '@/images/Github.png'
import linkedIn from '@/images/Linkedin.png'
import figma from '@/images/Figma.png'

export default function Footer() {
	
	const abreLinks = (e:any) => {
		const urls = ['https://github.com/JoaoMichaeli','https://github.com/ViniciuSaeSouza']

		urls.map((lnk => {
			window.open(lnk, '_blank')
		}))
	}

  return (
	<footer className='border-t-2 border-gray-400 sticky top-[100vh] p-3 flex justify-between'>
		<div className='flex items-start space-x-4  ms-16'>
			<Image className='mt-2' src={telefone} alt='Ícone de um telefone'/>
			<div>
				<h2 className='text-blue_1 font-semibold text-lg'><Link href={'/'}>SUPORTE</Link></h2>
				<p className='max-w-64 text-base'>Caso possua algum problema ao acessar o ChatMech entre em contato com nosso Suporte.</p>
			</div>
		</div>
		<div className='flex items-center space-x-6 me-24'>
			
			<a href="#" onClick={abreLinks} target='_blank'>
				<Image src={github} alt="Ícone do Github"/>
			</a>
			<a href="" target='_blank'>
				<Image src={linkedIn} alt="Ícone do LinkedIn"/>
			</a>
			<a href="" target='_blank'>
				<Image src={figma} alt="Ícone do Figma"/>
			</a>
		</div>
	</footer>
  )
}
