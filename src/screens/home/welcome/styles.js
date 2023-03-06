import { StyleSheet } from 'react-native';
import theme from '../../../theme/resources';
import { deviceWidth } from '../../../utils/device';


const styles = StyleSheet.create({
    cardSection: {
        backgroundColor: theme.White,
        padding: '1%'
    },
    cardInnerSection: {
        flexDirection: 'column',
        width: '100%',
        position: 'relative',
        alignItems: 'center',
        backgroundColor: theme.background,
    },
    titleStyle: {
        width: deviceWidth / 3.5,
        alignItems: 'center',
    },
    priceStyle: {
        marginLeft: '4%',
        marginTop: '2%',
        marginRight: '4%',
        marginBottom: '2%',
        alignItems: 'center'
    },
    separator: {
        height: 2.5,
        width: '100%',
        marginBottom: 2,
        backgroundColor: theme.White
    },
    welcomeTitle: {
        fontSize: 16,
        fontFamily: theme.Poppins.semiBold,
        color: theme.DarkerPurple,
        alignItems: 'center'
    },
    userTitle: {
        fontSize: 12,
        fontFamily: theme.Poppins.regular,
        color: theme.TextBlack,
        alignItems: 'center',
        textAlign: 'center',
    },
    brandTitle: {
        fontSize: 12,
        fontFamily: theme.Poppins.regular,
        color: theme.TextBlack,
        alignItems: 'center'
    },
    brandImgStyle: {
        width: 60,
        height: 60
    },

    userImgStyle: {
        width: 45,
        height: 45,
        borderRadius: (45) / 2,
    },
    userTitleStyle: {
        width: deviceWidth / 6.8,
        alignItems: 'center',
        marginTop: 4,
        marginBottom: 10
    },

    topBrandContainer: {
        flexDirection: 'column',
        //width: deviceWidth/4.35,
        position: 'relative',
        alignItems: 'center',
        marginHorizontal: 13,
        marginVertical: 9
    },

    userListContainer: {
        marginTop: 10,
        padding: 10
    },
    userListCardStyle: {
        backgroundColor: theme.background,
        paddingVertical: '8%',
        width: 139,
        height: 224
    },
    userListSubContainer: {
        flexDirection: 'column',
        // width: '100%',
        position: 'relative',
        alignItems: 'center',
        paddingVertical: 7,
    },
    userNameStyle: {
        color: theme.textGrey,
        fontSize: 8,
        fontFamily: theme.Poppins.regular,
    },
    postContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },

    btnFollow: {
        backgroundColor: theme.Purple,
        width: 120,
        height: 29,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    btnFollowTextStyle: {
        fontSize: 10,
        fontFamily: theme.Poppins.bold,
        alignItems: 'center',
        color: theme.White,
    },

    scrollViewContainer: {
        marginTop: '8%',
        marginHorizontal: '4%',
        flex: 1,
        alignItems: 'center'
    },
    logoStyle: {
        height: 46,
        width: 119
    },
    userTitleViewStyle: {
        flexWrap: 'wrap',
        alignItems: 'center',
        width: '70%',
    },
    userScrollViewChildContianer: {
        flex: 1,
        marginTop: '0%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    brandScrollViewChildContianer: {
        flex: 1,
        marginTop: '2%',
        marginBottom: '4%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
});

export default styles;