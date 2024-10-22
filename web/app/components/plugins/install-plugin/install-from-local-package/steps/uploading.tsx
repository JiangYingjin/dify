'use client'
import type { FC } from 'react'
import React from 'react'
import { RiLoader2Line } from '@remixicon/react'
import Card from '../../../card'
import type { PluginDeclaration } from '../../../types'
import Button from '@/app/components/base/button'
import { sleep } from '@/utils'

type Props = {
  file: File
  onCancel: () => void
  onUploaded: (result: {
    uniqueIdentifier: string
    manifest: PluginDeclaration
  }) => void
}

const Uploading: FC<Props> = ({
  file,
  onCancel,
  onUploaded,
}) => {
  const fileName = file.name
  const handleUpload = async () => {
    await sleep(1500)
    onUploaded({
      uniqueIdentifier: 'yeuoly/neko:0.0.1@5395654da2c0b919b3d9b946a1a0545b737004380765e5f3b8c49976d3276c87',
      manifest: {
        name: 'Notion Sync',
        description: 'Sync your Notion notes with Dify',
      } as any,
    })
  }

  React.useEffect(() => {
    handleUpload()
  }, [])
  return (
    <>
      <div className='flex flex-col px-6 py-3 justify-center items-start gap-4 self-stretch'>
        <div className='flex items-center gap-1 self-stretch'>
          <RiLoader2Line className='text-text-accent w-4 h-4' />
          <div className='text-text-secondary system-md-regular'>
            Uploading {fileName}...
          </div>
        </div>
        <div className='flex p-2 items-start content-start gap-1 self-stretch flex-wrap rounded-2xl bg-background-section-burn'>
          <Card
            className='w-full'
            payload={{ name: fileName } as any}
            isLoading
            loadingFileName={fileName}
            installed={false}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className='flex p-6 pt-5 justify-end items-center gap-2 self-stretch'>
        <Button variant='secondary' className='min-w-[72px]' onClick={onCancel}>
          Cancel
        </Button>
        <Button
          variant='primary'
          className='min-w-[72px]'
          disabled
        >
          installing
        </Button>
      </div>
    </>
  )
}

export default React.memo(Uploading)