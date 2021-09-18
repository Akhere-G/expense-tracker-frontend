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
    <SkeletonSection width="30%">
      <SkeletonText width="60px" />
      <SkeletonText width="70px" />
    </SkeletonSection>
    <SkeletonSection width="60%">
      <SkeletonText width="80px" />
      <SkeletonText width="70px" />
    </SkeletonSection>
    <SkeletonSection width="10%">
      <SkeletonButtonGroup>
        <SkeletonButton />
        <SkeletonButton />
      </SkeletonButtonGroup>
    </SkeletonSection>
    <Separator />
  </SkeletonTransaction>
);

export default Skeleton;
