import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: transform ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: scale(1.05);

    img {
      filter: brightness(0.5);
    }

    div {
      opacity: 1;
    }
  }
`;

export const Poster = styled.img`
  width: 100%;
  aspect-ratio: 2/3;
  object-fit: cover;
  transition: filter ${({ theme }) => theme.transitions.default};
`;

export const Content = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${({ theme }) => theme.spacing.md};
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.5) 60%,
    transparent 100%
  );
  opacity: 0;
  transition: opacity ${({ theme }) => theme.transitions.default};
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ReleaseDate = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
`;

export const Rating = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.sm};
  right: ${({ theme }) => theme.spacing.sm};
  background-color: rgba(0, 0, 0, 0.75);
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: 4px;
  font-weight: bold;
`;
