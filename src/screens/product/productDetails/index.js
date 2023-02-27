import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MainContainer from '../../../components/mainContainer';
import Header from '../../../components/header';
import P1 from '../../../assets/images/p1-Details.png';
import { ImageSlider } from "react-native-image-slider-banner";
import { deviceWidth } from '../../../utils/device';
import { ScrollView } from 'react-native-gesture-handler';
import Title from '../../../components/title';
import LineDivider from '../../../components/lineDivider';
import HeartIcon from '../../../assets/svg/Wishlist-inactive.svg';
import FastImage from 'react-native-fast-image';
import SmallImg from '../../../assets/images/smallP1.png';
import theme from '../../../theme/resources';
import PriceText from '../../../components/priceText';
import Heading from '../../../components/heading';
import SizeChartIcon from '../../../assets/svg/Size-chart.svg';
import ReadMore from '@fawazahmed/react-native-read-more';
import Button from '../../../components/button';
import RelatedImg1 from '../../../assets/images/smallPs1.png';
import RelatedImg2 from '../../../assets/images/smallPs2.png';
import { navigate } from '../../../services/NavigationService';


const sizeChart = [
    {
        id: 1, title: 'XS',
    },
    {
        id: 2, title: 'S',
    },
    {
        id: 3, title: 'M',
    },
    {
        id: 4, title: 'L',
    },
    {
        id: 5, title: 'XL',
    },
    {
        id: 6, title: 'XXL',
    },
]
const relatedProducts = [
    {
        id: 1, title: 'Tradit...', imgUrl: RelatedImg1
    },
    {
        id: 2, title: 'Tradit...', imgUrl: RelatedImg2
    },
    {
        id: 3, title: 'Tradit...', imgUrl: RelatedImg1
    },
    {
        id: 4, title: 'Tradit...', imgUrl: RelatedImg2
    },
    {
        id: 5, title: 'Tradit...', imgUrl: RelatedImg1
    },
    {
        id: 6, title: 'Tradit...', imgUrl: RelatedImg2
    },
]

function ProductDetailsScreen() {
    const [selectSize, setSelectSize] = useState(0)
    const [isAddtoBtn, setIsAddtoBtn] = useState(false);


    const handleChartAction = (index) => {
        setSelectSize(index)
    }
    const handleAddtoBag = () => {
        setIsAddtoBtn(true);
    }


    return (
        <MainContainer>
            <Header />
            <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
                <View>
                    <ImageSlider
                        data={[
                            { img: P1 },
                            { img: P1 },
                            { img: P1 },
                            { img: P1 },
                            { img: P1 },
                        ]}
                        autoPlay={false}
                        onItemChanged={(item) => console.log("item", item)}
                        closeIconColor="#fff"
                        localImg
                        showIndicator={false}
                        onClick={(item, index) => { alert('hello' + index) }}
                        caroselImageStyle={{ resizeMode: 'cover', width: deviceWidth, height: 440 }}
                    >
                        <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', bottom: 16, right: 16 }}>
                            <HeartIcon />
                        </TouchableOpacity>
                    </ImageSlider>

                    <View style={{ marginHorizontal: '4%', }}>
                        <View style={{ marginTop: 8, flexDirection: 'row' }}>
                            {[1, 2, 3, 4, 5,].map((_, index) =>
                            (<View style={{ marginHorizontal: 3 }} key={index}>
                                <FastImage source={SmallImg} style={{ width: 48, height: 60, borderWidth: 4, borderColor: index == 0 ? theme.Purple : 'transparent' }} />
                            </View>)
                            )}
                        </View>

                        {/* Product Title section */}
                        <View style={{ marginTop: 16 }}>
                            <Title name="GORGEOUS DESIGNER SAREE" textStyle={{ fontSize: 20 }} viewStyle={{ marginLeft: 0 }} />
                            <LineDivider extraStyle={{ borderWidth: 1, borderColor: theme.TextBlack, width: 160, marginTop: 4 }} />
                            <View style={{ marginTop: 6, }}>
                                <Text style={{ fontSize: 12, fontWeight: '400', color: theme.TextBlack }}>SOLD BY- <Text style={{ fontSize: 12, fontWeight: '400', color: theme.Purple }}>DRAPES BY RASHMI </Text></Text>
                            </View>
                        </View>

                        {/* Price Section */}
                        <View style={{ marginTop: 14, }}>
                            <PriceText price={'2,999.00'} viewStyle={{ alignItems: 'flex-start', marginLeft: 0 }} textStyle={{ fontSize: 20, fontWeight: '600' }} />
                        </View>

                        {/* Select Size */}
                        <View style={{}}>
                            <Heading title={'Select Size'} textStyle={{ fontSize: 16, fontWeight: '500' }} />
                            <View style={{ backgroundColor: theme.Peach, width: '100%', height: 40, borderRadius: 5 }}>
                                <View style={{ flexDirection: 'row', borderRadius: 5, overflow: 'hidden' }}>
                                    {sizeChart.map((item, index) => (
                                        <TouchableOpacity onPress={() => handleChartAction(index)} key={index} style={{ width: '16.6%', height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: selectSize == index ? theme.lightOrange : 'transparent' }}>
                                            <Text>{item.title}</Text>
                                        </TouchableOpacity>
                                    )
                                    )}
                                </View>
                            </View>
                            <View style={{ marginTop: 6, alignItems: 'center', width: '100%' }}>
                                <SizeChartIcon />
                            </View>
                        </View>

                        {/* Specifications */}
                        <View style={{ marginTop: 12 }}>
                            <Heading title={'Specifications'} textStyle={{ fontWeight: '500', fontSize: 16 }} />
                            <ReadMore numberOfLines={3} style={{ fontSize: 14 }}>
                                Classical Silk Saree
                            </ReadMore>
                        </View>

                        {/* Specifications */}
                        <View style={{ marginTop: 12 }}>
                            <Heading title={'Description'} textStyle={{ fontWeight: '500', fontSize: 16 }} />
                            <ReadMore numberOfLines={3} style={{ fontSize: 14, width: '100%' }}>
                                Keep the allure of traditional artistry alive and ablaze with these ornately crafted stud earrings.
                                This pair is the perfect match to your heirloom sarees.
                            </ReadMore>
                        </View>

                        {/* Buttons  */}
                        <View style={{ marginTop: 12, alignItems: 'center', }}>
                            <View style={{ alignItems: 'center', width: '100%' }}>
                                <Button mode="outlined" textStyle={{ color: theme.TextBlack, fontSize: 14, }} style={{ width: '100%', height: 40, borderWidth: 1, borderColor: isAddtoBtn ? theme.lightOrange : theme.TextBlack, paddingVertical: 0, borderRadius: 1, backgroundColor: isAddtoBtn ? theme.lightOrange : 'transparent' }} onPress={handleAddtoBag}>Add to Bag</Button>
                            </View>
                            <View style={{ alignItems: 'center', width: '100%' }}>
                                <Button mode="contained" style={{ width: '100%', height: 40, borderRadius: 1 }} onPress={() => navigate('cart')}>Buy Now</Button>
                            </View>
                        </View>

                        {/* Related product  */}
                        <View style={{ marginTop: 24 }}>
                            <Heading title="You may also like" />
                            <ScrollView horizontal
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{ flexDirection: 'row' }}>
                                {relatedProducts.map((ele, index) => (
                                    <View key={index} style={{ marginHorizontal: 6,overflow:'hidden', width: 75,overflow:'hidden'}}>
                                        <FastImage source={ele.imgUrl} style={{ width: 72, height: 104 }} />
                                        <Text style={{marginTop:12, width:72}} numberOfLines={1}>{ele.title}</Text>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </MainContainer>
    )
}

export default ProductDetailsScreen;