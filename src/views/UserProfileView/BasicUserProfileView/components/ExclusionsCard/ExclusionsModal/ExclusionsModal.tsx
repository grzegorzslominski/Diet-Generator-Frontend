import { mainTheme } from "../../../../../../themes/mainTheme";

import ModalPortal from "../../../../../../components/UI/ModalPortal/ModalPortal";
import ScrollBox from "../../../../../../components/UI/ScrollBox/ScrollBox";
import BoxPad from "../../../../../../components/UI/BoxPad/BoxPad";
import Label from "../../../../../../components/UI/Label/Label";

import { Product } from "../../../../../../models/Meal/Exclusions";

import * as S from "./ExclusionsModal.style";

type ExclusionsModalProps = {
    exclusions?: Product[];
    products?: Product[];
    productsIsLoading: boolean;
    close: () => void;
};

const ExclusionsModal = ({ exclusions, products, close }: ExclusionsModalProps) => {
    return (
        <ModalPortal close={close}>
            <BoxPad header='List of excluded products'>
                <S.Container>
                    <Label fontSize='12px'>
                        The selected exclusions will be included in each generated diet. If you want
                        to modify this list for a specific diet, you will be able to do so during
                        the diet generation process.
                    </Label>
                    <ScrollBox height={500} scrollDistance={200}>
                        <S.ProductsContainer></S.ProductsContainer>
                    </ScrollBox>
                    {!exclusions?.length && (
                        <S.EmptyContainer>
                            <Label fontSize='12px' color={mainTheme.colors.mainBlack}>
                                No exclusions in the diet
                            </Label>
                        </S.EmptyContainer>
                    )}
                </S.Container>
            </BoxPad>
        </ModalPortal>
    );
};

export default ExclusionsModal;
