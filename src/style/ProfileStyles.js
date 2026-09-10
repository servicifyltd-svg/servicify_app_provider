import { StyleSheet } from "react-native";

const COLORS = {
    background: "#020814",
    card: "#071020",
    cardLight: "#091225",
    border: "#263551",

    white: "#FFFFFF",
    text: "#AAB4CC",
    muted: "#697386",

    purple: "#A855F7",
    purpleDark: "#17112E",
    purpleButton: "#7C3AED",

    green: "#22C55E",
    yellow: "#FBBF24",
    red: "#EF4444",
    blue: "#3B82F6",
};

export default StyleSheet.create({

    // =====================================================
    // COMMON
    // =====================================================

    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingTop: 40,
    },

    content: {
        paddingHorizontal: 16,
        paddingBottom: 35,
    },

    // =====================================================
    // HEADER
    // =====================================================

    header: {
        height: 70,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    headerTitle: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: "700",
    },

    backButton: {
        width: 36,
        height: 36,
        borderRadius: 15,
        backgroundColor: COLORS.cardLight,
        borderWidth: 1,
        borderColor: COLORS.border,
        alignItems: "center",
        justifyContent: "center",
    },

    settingsButton: {
        width: 48,
        height: 48,
        borderRadius: 15,
        backgroundColor: COLORS.cardLight,
        borderWidth: 1,
        borderColor: COLORS.border,
        alignItems: "center",
        justifyContent: "center",
    },

    // =====================================================
    // PROFILE
    // =====================================================

    profileHeader: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        marginBottom: 18,
    },

    profileImageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: COLORS.purpleDark,
        borderWidth: 2,
        borderColor: COLORS.purple,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },

    profileImage: {
        width: 96,
        height: 96,
        borderRadius: 48,
    },

    verifiedBadge: {
        position: "absolute",
        right: -2,
        bottom: 0,
        width: 31,
        height: 31,
        borderRadius: 16,
        backgroundColor: COLORS.green,
        borderWidth: 3,
        borderColor: COLORS.background,
        alignItems: "center",
        justifyContent: "center",
    },

    profileInfo: {
        flex: 1,
        marginLeft: 16,
    },

    name: {
        color: COLORS.white,
        fontSize: 20,
        fontWeight: "700",
    },

    role: {
        color: COLORS.text,
        fontSize: 14,
        marginTop: 4,
    },

    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
    },

    star: {
        color: COLORS.yellow,
        fontSize: 18,
        marginRight: 5,
    },

    rating: {
        color: COLORS.white,
        fontSize: 15,
        fontWeight: "600",
    },

    ratingDivider: {
        width: 1,
        height: 18,
        backgroundColor: "#526078",
        marginHorizontal: 9,
    },

    reviews: {
        color: COLORS.text,
        fontSize: 13,
    },

    // =====================================================
    // PROFILE COMPLETION
    // =====================================================

    profileCircle: {
        width: 110,
        height: 110,
        borderRadius: 55,
        backgroundColor: "#17112E",
        borderWidth: 2,
        borderColor: "#A855F7",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },

    cameraButton: {
        position: "absolute",
        right: -2,
        bottom: 0,
        width: 34,
        height: 34,
        borderRadius: 17,
        backgroundColor: "#7C3AED",
        borderWidth: 3,
        borderColor: "#020814",
        alignItems: "center",
        justifyContent: "center",
    },

    changePhoto: {
        color: "#A855F7",
        fontSize: 13,
        fontWeight: "600",
        marginTop: 10,
    },

    completeCard: {
        minHeight: 95,
        backgroundColor: COLORS.card,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 18,
        padding: 13,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 22,
    },

    completeIcon: {
        width: 57,
        height: 57,
        borderRadius: 29,
        backgroundColor: COLORS.purpleDark,
        borderWidth: 1,
        borderColor: "#6D28D9",
        alignItems: "center",
        justifyContent: "center",
    },

    completeInfo: {
        flex: 1,
        marginLeft: 13,
    },

    completeTitle: {
        color: COLORS.white,
        fontSize: 15,
        fontWeight: "600",
    },

    completeSubtitle: {
        color: COLORS.text,
        fontSize: 12,
        marginTop: 4,
        marginBottom: 7,
    },

    progressBackground: {
        height: 6,
        backgroundColor: COLORS.border,
        borderRadius: 5,
        overflow: "hidden",
    },

    progress: {
        height: 6,
        backgroundColor: COLORS.purple,
        borderRadius: 5,
    },

    // =====================================================
    // GROUP TITLE
    // =====================================================

    groupTitle: {
        color: COLORS.text,
        fontSize: 13,
        fontWeight: "600",
        marginBottom: 8,
        marginLeft: 3,
    },

    // =====================================================
    // MENU
    // =====================================================

    menuCard: {
        backgroundColor: COLORS.card,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 18,
        paddingHorizontal: 12,
        marginBottom: 20,
        overflow: "hidden",
    },

    menuItem: {
        minHeight: 61,
        flexDirection: "row",
        alignItems: "center",
    },

    menuBorder: {
        borderBottomWidth: 1,
        borderBottomColor: "#17243A",
    },

    menuIcon: {
        width: 42,
        height: 42,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },

    menuTitle: {
        flex: 1,
        color: COLORS.white,
        fontSize: 14,
        marginLeft: 13,
    },

    // =====================================================
    // INPUT
    // =====================================================

    inputWrapper: {
        marginBottom: 17,
    },

    label: {
        color: COLORS.text,
        fontSize: 13,
        marginBottom: 8,
    },

    inputContainer: {
        minHeight: 52,
        backgroundColor: COLORS.card,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 14,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 14,
    },

    input: {
        flex: 1,
        color: COLORS.white,
        fontSize: 12,
        marginLeft: 11,
    },

    // =====================================================
    // TEXT AREA
    // =====================================================

    textAreaContainer: {
        minHeight: 130,
        backgroundColor: COLORS.card,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 14,
        padding: 14,
        flexDirection: "row",
        alignItems: "flex-start",
    },

    textArea: {
        flex: 1,
        color: COLORS.white,
        fontSize: 14,
        marginLeft: 10,
        minHeight: 100,
        textAlignVertical: "top",
    },

    // =====================================================
    // BUTTON
    // =====================================================

    button: {
        height: 44,
        borderRadius: 16,
        backgroundColor: COLORS.purpleButton,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 12,
        marginBottom: 20,
    },

    buttonText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: "700",
    },

    // =====================================================
    // SECTION TITLE
    // =====================================================

    sectionTitle: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: "700",
        marginBottom: 14,
        marginTop: 8,
    },

    // =====================================================
    // BUSINESS
    // =====================================================

    statusCard: {
        backgroundColor: COLORS.card,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 16,
        padding: 14,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },

    statusIcon: {
        width: 48,
        height: 48,
        borderRadius: 14,
        backgroundColor: "#062E21",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },

    statusTitle: {
        color: COLORS.white,
        fontSize: 14,
        fontWeight: "600",
    },

    statusText: {
        color: COLORS.text,
        fontSize: 11,
        marginTop: 4,
    },

    verified: {
        color: COLORS.yellow,
        fontSize: 11,
        fontWeight: "700",
    },

    // =====================================================
    // DOCUMENTS
    // =====================================================

    infoCard: {
        backgroundColor: COLORS.purpleDark,
        borderWidth: 1,
        borderColor: "#4C1D95",
        borderRadius: 18,
        padding: 17,
        marginBottom: 18,
    },

    infoTitle: {
        color: COLORS.white,
        fontSize: 17,
        fontWeight: "700",
        marginTop: 10,
    },

    infoText: {
        color: COLORS.text,
        fontSize: 13,
        lineHeight: 19,
        marginTop: 5,
    },

    documentCard: {
        minHeight: 72,
        backgroundColor: COLORS.card,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 16,
        padding: 11,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 11,
    },

    documentIcon: {
        width: 48,
        height: 48,
        borderRadius: 13,
        backgroundColor: COLORS.purpleDark,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },

    documentTitle: {
        color: COLORS.white,
        fontSize: 14,
        fontWeight: "600",
    },

    documentSubtitle: {
        color: COLORS.text,
        fontSize: 11,
        marginTop: 4,
    },

    statusBadge: {
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderRadius: 8,
        marginRight: 5,
    },

    // =====================================================
    // BANK
    // =====================================================

    //add some animation to the bank card when it is added or removed
    addBankCard: {
        backgroundColor: COLORS.card,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 18,
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },


    bankHeader: {
        backgroundColor: COLORS.card,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 18,
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },

    bankIcon: {
        width: 58,
        height: 58,
        borderRadius: 16,
        backgroundColor: COLORS.purpleDark,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 13,
    },

    bankTitle: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: "700",
    },

    bankSubtitle: {
        color: COLORS.text,
        fontSize: 11,
        marginTop: 4,
        maxWidth: 220,
    },

    secureCard: {
        backgroundColor: "#062E21",
        borderWidth: 1,
        borderColor: "#14532D",
        borderRadius: 14,
        padding: 13,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },

    secureText: {
        flex: 1,
        color: "#86EFAC",
        fontSize: 12,
        marginLeft: 9,
    },

    noBankContainer: {
        marginTop: "10%",
        marginBottom: 20,
        backgroundColor: COLORS.card,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 18,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },

    noBankText: {
        color: COLORS.text,
        fontSize: 14,
        textAlign: "center",
    },

    addBankButton: {
        backgroundColor: COLORS.purpleButton,
        borderWidth: 1,
        borderColor: COLORS.purple,
        borderRadius: 15,
        padding: 12,
        alignItems: "center",
        justifyContent: "center",
    },

    addBankButtonText: {
        color: COLORS.white,
        fontSize: 14,
        fontWeight: "600",
    },



    // =====================================================
    // AVAILABILITY
    // =====================================================

    daysContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
        marginBottom: 20,
    },

    day: {
        width: 43,
        height: 43,
        borderRadius: 12,
        backgroundColor: COLORS.card,
        borderWidth: 1,
        borderColor: COLORS.border,
        alignItems: "center",
        justifyContent: "center",
    },

    activeDay: {
        backgroundColor: COLORS.purpleButton,
        borderColor: COLORS.purple,
    },

    dayText: {
        color: COLORS.text,
        fontSize: 12,
        fontWeight: "600",
    },

    activeDayText: {
        color: COLORS.white,
    },

    timeRow: {
        flexDirection: "row",
        gap: 10,
        marginBottom: 20,
    },

    timeBox: {
        flex: 1,
        backgroundColor: COLORS.card,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 15,
        padding: 12,
    },

    timeLabel: {
        color: COLORS.text,
        fontSize: 11,
        marginBottom: 8,
    },

    timeValueRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    timeValue: {
        flex: 1,
        color: COLORS.white,
        fontSize: 13,
        marginLeft: 7,
    },

    noteCard: {
        backgroundColor: COLORS.purpleDark,
        borderWidth: 1,
        borderColor: "#4C1D95",
        borderRadius: 15,
        padding: 13,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },

    noteText: {
        flex: 1,
        color: COLORS.text,
        fontSize: 12,
        lineHeight: 18,
        marginLeft: 9,
    },

    // =====================================================
    // SERVICE AREA
    // =====================================================

    mapCard: {
        height: 180,
        backgroundColor: "#0A1426",
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },

    mapTitle: {
        color: COLORS.white,
        fontSize: 17,
        fontWeight: "700",
        marginTop: 10,
    },

    mapText: {
        color: COLORS.text,
        fontSize: 12,
        textAlign: "center",
        marginTop: 6,
        paddingHorizontal: 30,
        lineHeight: 18,
    },

    radiusCard: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
        marginBottom: 22,
    },

    radiusButton: {
        paddingHorizontal: 16,
        height: 42,
        borderRadius: 12,
        backgroundColor: COLORS.card,
        borderWidth: 1,
        borderColor: COLORS.border,
        alignItems: "center",
        justifyContent: "center",
    },

    activeRadius: {
        backgroundColor: COLORS.purpleButton,
        borderColor: COLORS.purple,
    },

    radiusText: {
        color: COLORS.text,
        fontSize: 13,
        fontWeight: "600",
    },

    activeRadiusText: {
        color: COLORS.white,
    },

    areaHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    addText: {
        color: COLORS.purple,
        fontSize: 13,
        fontWeight: "700",
    },

    areaCard: {
        height: 58,
        backgroundColor: COLORS.card,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 15,
        paddingHorizontal: 12,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },

    areaIcon: {
        width: 38,
        height: 38,
        borderRadius: 11,
        backgroundColor: COLORS.purpleDark,
        alignItems: "center",
        justifyContent: "center",
    },

    areaName: {
        flex: 1,
        color: COLORS.white,
        fontSize: 14,
        marginLeft: 11,
    },

    addAreaContainer:{
        backgroundColor: COLORS.card,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 15,
        padding: 12,
        marginBottom: 10,
    },

    addAreaInput:{
        height: 40,
        backgroundColor: "#FFBEFB",
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 10,
        color: "black",
        fontSize: 13,
        marginBottom: 10,

    },

    addAreaButton: {
        backgroundColor: COLORS.purple,
        borderWidth: 1,
        borderColor: COLORS.purple,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
    },

    addAreaButtonText: {
        color: COLORS.white,
        fontSize: 13,
        fontWeight: "700",
    },



    // =====================================================
    // REVIEWS
    // =====================================================

    ratingCard: {
        backgroundColor: COLORS.card,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 20,
        padding: 22,
        alignItems: "center",
        marginBottom: 15,
    },

    ratingNumber: {
        color: COLORS.white,
        fontSize: 45,
        fontWeight: "800",
    },

    stars: {
        flexDirection: "row",
        marginTop: 3,
    },

    totalReviews: {
        color: COLORS.text,
        fontSize: 12,
        marginTop: 7,
    },

    reviewCard: {
        backgroundColor: COLORS.card,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 17,
        padding: 14,
        marginBottom: 11,
    },

    reviewHeader: {
        flexDirection: "row",
        alignItems: "center",
    },

    avatar: {
        width: 45,
        height: 45,
        borderRadius: 23,
        backgroundColor: "#182235",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 11,
    },

    smallStar: {
        fontSize: 13,
        marginRight: 2,
    },

    starRow: {
        flexDirection: "row",
        marginTop: 3,
    },

    date: {
        color: COLORS.muted,
        fontSize: 10,
    },

    reviewText: {
        color: COLORS.text,
        fontSize: 12,
        lineHeight: 18,
        marginTop: 13,
    },

    uploadIconContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "#24153A",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 20,
    },

    uploadTitle: {
        color: "#FFFFFF",
        fontSize: 22,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 10,
    },

    uploadDescription: {
        color: "#AAB4CC",
        fontSize: 14,
        lineHeight: 21,
        textAlign: "center",
        marginBottom: 25,
    },

    uploadOption: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#13192D",
        borderWidth: 1,
        borderColor: "#252D42",
        borderRadius: 14,
        padding: 15,
        marginBottom: 12,
    },

    uploadOptionIcon: {
        width: 48,
        height: 48,
        borderRadius: 12,
        backgroundColor: "#24153A",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 13,
    },

    uploadOptionTitle: {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "600",
        marginBottom: 4,
    },

    uploadOptionText: {
        color: "#697386",
        fontSize: 12,
        lineHeight: 18,
    },

    selectedFileCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#082D20",
        borderWidth: 1,
        borderColor: "#145C42",
        borderRadius: 14,
        padding: 15,
        marginTop: 5,
        marginBottom: 15,
    },

    selectedFileTitle: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "600",
    },

    selectedFileText: {
        color: "#8FA39A",
        fontSize: 12,
        marginTop: 3,
    },

    requirementCard: {
        flexDirection: "row",
        backgroundColor: "#171D31",
        borderWidth: 1,
        borderColor: "#292F45",
        borderRadius: 14,
        padding: 15,
        marginTop: 5,
        marginBottom: 25,
    },

    requirementTitle: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 8,
    },

    requirementText: {
        color: "#8F9AB0",
        fontSize: 12,
        lineHeight: 20,
    },

    disabledButton: {
        opacity: 0.5,
    },

});