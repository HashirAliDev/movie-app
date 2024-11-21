import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    z-index: 1;
  }
`;

export const PosterWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 150%;
  overflow: hidden;
  border-radius: 4px;

  &:hover {
    & > div {
      opacity: 1;
    }
  }
`;

export const Poster = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContentOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.9) 100%
  );
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const Title = styled.h3`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 8px;
`;

export const Overview = styled.p`
  color: #ffffff;
  font-size: 0.9rem;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const IconButton = styled.button`
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  svg {
    font-size: 1.2rem;
  }
`;
