import FeaturedMovie from '@/components/feature-movie';
import React from 'react';

function MovieCntainer({movie}) {
    return  <FeaturedMovie movie={movie} isCompact={false} />
    
}

export default MovieCntainer;