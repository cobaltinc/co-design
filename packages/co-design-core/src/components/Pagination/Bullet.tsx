import React from 'react';

interface BulletProps {
  className?: string;
  circleClassName?: string;
}

const Bullet = ({ circleClassName, ...props }: BulletProps) => {
  return (
    <div {...props}>
      {[0, 1, 2].map((_, index) => (
        <div key={index} className={circleClassName}>
          ·
        </div>
      ))}
    </div>
  );
};

export default Bullet;
