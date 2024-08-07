import { ThumbnailType, Thumbnail } from './Thumbnail'
import './Thumbnails.css'

interface ThumbnailsProps {
    thumbnails: ThumbnailType[]
    cardRef?: any;
}

export const Thumbnails = ({ thumbnails, cardRef }: ThumbnailsProps) => {
    return (
        <div className='thumbnails'>
            {thumbnails.map((thumbnail, index) => (
                <Thumbnail  key={index} cardRef={(el: any) => (cardRef.current[index] = el)} {...thumbnail} />
            ))}
        </div>
    )
}