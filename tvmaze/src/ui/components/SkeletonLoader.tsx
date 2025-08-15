import React from "react";
import { Placeholder } from "react-bootstrap";

export const SkeletonLoader: React.FC = () => {
  return (
    <div className="d-grid gap-3">
      {/* Search skeleton */}
      <Placeholder as="div" animation="glow" style={{ height: '38px' }}>
        <Placeholder xs={12} style={{ height: '38px' }} />
      </Placeholder>
      
      {/* Genre select skeleton */}
      <Placeholder as="div" animation="glow" style={{ height: '38px' }}>
        <Placeholder xs={12} style={{ height: '38px' }} />
      </Placeholder>
      
      {/* Name select skeleton */}
      <Placeholder as="div" animation="glow" style={{ height: '38px' }}>
        <Placeholder xs={12} style={{ height: '38px' }} />
      </Placeholder>
      
      {/* Movie card skeleton */}
      <Placeholder as="div" animation="glow" style={{ height: '200px' }}>
        <Placeholder xs={12} style={{ height: '200px' }} />
      </Placeholder>
    </div>
  );
};
