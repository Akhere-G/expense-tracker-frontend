import React from "react";
import {
  SkeletonTransaction,
  Separator,
  SkeletonSection,
  SkeletonText,
  SkeletonButton,
  SkeletonButtonGroup,
} from "../Transaction.styled";

const Skeleton = () => (
  <SkeletonTransaction>
    <SkeletonSection width="33%">
      <SkeletonText width="40%" />
      <SkeletonText width="50%" />
    </SkeletonSection>
    <SkeletonSection width="33%" center>
      <SkeletonText width="60%" />
      <SkeletonText width="70%" />
    </SkeletonSection>
    <SkeletonSection width="33%">
      <SkeletonButtonGroup>
        <SkeletonButton />
        <SkeletonButton />
      </SkeletonButtonGroup>
    </SkeletonSection>
    <Separator />
  </SkeletonTransaction>
);

export default Skeleton;
