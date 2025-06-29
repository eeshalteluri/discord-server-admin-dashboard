'use client'
import React, { useCallback } from 'react'
import { X } from 'lucide-react';

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?:string;
    body?:React.ReactElement;
    footer?:React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled
}) => {

    const handleClose = useCallback(() => {
        if(disabled) {
            return
        }  
        
        onClose()
    }, [disabled, onClose])

    const handleSubmit = useCallback(() => {
        console.log("disabled :", disabled);
        
        if(disabled){
            return;
        }

       onSubmit()
    }, [disabled, onSubmit])

    if(!isOpen){
        return null;
    }

  return (
    <div
        className='
        flex
        justify-center
        items-center
        overflow-x-hidden
        overflow-y-auto
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        bg-neutral-800/70
        '
    >
        <div 
            className='
            relative
            w-full
            lg:w-3/6
            my-6
            mx-auto
            lg:max-w-3xl
            h-full
            lg:h-auto
            '
        >
            {/*Content*/}
            <div
                className='
                    h-full
                    lg:h-auto
                    border-0
                    rounded-lg
                    shadow-lg
                    relative
                    flex
                    flex-col
                    w-full
                    bg-black
                    outline-none
                    focus:outline-none
                '
            >
                {/*Header*/}
                <div
                    className='
                        flex
                        items-center
                        jusity-center
                        p-10
                        rounded-t
                    '
                >
                    <h3
                        className='
                            text-3xl font-semibold text-white
                        '
                    >{title}</h3>
                    <button
                        onClick={handleClose}
                        className='
                        p-1
                        ml-auto
                        border-0
                        text-white
                        hover:opacity-70
                        transition
                        '
                    >
                        <X />
                    </button>
                </div>

                {/* Body */}
                <div
                    className='relative p-10 flex-auto'
                >
                    {body}
                </div>

                {/* Footer */}
                {/* Footer */}
<div className='p-6 flex justify-end gap-4'>
  {footer}
  <button 
    className='
      bg-white 
      text-black 
      px-4 
      py-2 
      rounded-md 
      font-semibold 
      hover:opacity-80 
      transition 
      disabled:opacity-50
    '
    disabled={disabled}
    onClick={handleSubmit}
  >
    {actionLabel}
  </button>
</div>

            </div>
        </div>
    </div>
  )
}

export default Modal