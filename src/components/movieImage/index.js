import React from 'react';

import {
  ImageBackground,
  StatsBar,
  StatsItem,
  StatsDescriptions,
  Icon,
  Label
} from './styles';

function MovieImage({ wide }) {

  const img = wide ? require('../../../assets/img2.png') : require('../../../assets/img1.png');

  return (
    <ImageBackground
      source={ img }
      wide={ wide }
    >
      <StatsBar wide={ wide }>
        <StatsItem>
          <Icon name="eye" wide={ wide } />
          <StatsDescriptions wide={ wide }>
            <Label wide={ wide }>613k</Label>
            { wide && <Label small>watchers</Label> }
          </StatsDescriptions>
        </StatsItem>

        <StatsItem>
          <Icon name="controller-play" wide={ wide } />
          <StatsDescriptions wide={ wide }>
            <Label wide={ wide }>65.8m</Label>
            { wide && <Label small>plays</Label> }
          </StatsDescriptions>
        </StatsItem>

        <StatsItem>
          <Icon name="heart" color="#C4302B" wide={ wide } />
          <StatsDescriptions wide={ wide }>
            <Label wide={ wide }>82%</Label>
            { wide && <Label small>60.4k votes</Label> }
          </StatsDescriptions>
        </StatsItem>
      </StatsBar>
    </ImageBackground>
  );
};

export default MovieImage;
