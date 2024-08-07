import './Thumbnail.css'

export interface ThumbnailType {
    image: string;
    name: string;
}

type ThumbnailProps = ThumbnailType & {
    cardRef?: any
}

export const Thumbnail = ({ image, name, cardRef }: ThumbnailProps) => {
    return (
        <div
            className={`thumbnail ${cardRef ? '' : 'visible'}`}
            ref={cardRef}
        >
            <img className='thumbnail-image' src={image} alt='img section car' />
            <p className="thumbnail-name">{name}</p>
        </div>
    )
}