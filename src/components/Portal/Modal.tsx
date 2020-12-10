import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

const modalRoot = document.createElement('div')
modalRoot.setAttribute('id', 'modal-root')
document.body.appendChild(modalRoot)

interface IProps {
	onClose?: () => any
}

export const Modal: React.FC<IProps> = ({ children, onClose: closeHandler }) => {
	const el = document.createElement('div')

	useEffect(() => {
		modalRoot.appendChild(el)
		return () => {
			modalRoot.removeChild(el)
		}
	}, [])

	return createPortal( 
		<div onClick={closeHandler}>
			<div onClick={e => e.stopPropagation()}>
				{children}
				<button onClick={closeHandler}>Close</button>
			</div>
		</div>,
		el
	)
}