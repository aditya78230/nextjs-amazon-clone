import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewUpdateInput = {
  product?: ProductWhereUniqueInput | null;
  rating?: string;
  user?: UserWhereUniqueInput | null;
};
