import { useRef } from 'react'

const VideoPlayer = () => {
	const ref = useRef<HTMLVideoElement>(null)

	const handlePlay = () => {
		ref?.current?.play()
	}

	const handlePause = () => {
		ref?.current?.pause()
	}

	return (
		<div>
			<button onClick={handlePlay}>Play</button>
			<button onClick={handlePause}>Pause</button>
			<video
				src='https://player.vimeo.com/external/517517367.sd.mp4'
				ref={ref}
				width='300'
			/>
		</div>
	)
}

export default VideoPlayer
