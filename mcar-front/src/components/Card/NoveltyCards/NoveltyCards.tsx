import './NoveltyCards.css';
import { NoveltyCard, INoveltyCardProps } from '../NoveltyCard'

interface INoveltiesProps {
  novelties: INoveltyCardProps[]
}

export const NoveltyCards = ({novelties}: INoveltiesProps) => {
  return (
    <div className="cars-wrapper">
      <div className="cars-header-wrapper">
        <div className="cars-title">Nouveauté</div>
      </div>
      {novelties.map((novelty, index) => (
        <NoveltyCard key={index} {...novelty} />
      ))}
    </div>
  )
}
