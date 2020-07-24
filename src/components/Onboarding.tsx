import React, { useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { interpolateColor, useScrollHandler } from "react-native-redash";
import Animated, { multiply, divide } from "react-native-reanimated";

const { width } = Dimensions.get("window");

import theme from "../theme";

import Slide, { SLIDE_HEIGHT } from "./Slide";
import SubSlide from "./SubSlide";
import Dot from "./Dot";
import { StackNavigationProps, Routes } from "./AppRoutes";
// export const BORDER_RADIUS = 75;

const Onboarding = ({
  navigation,
}: StackNavigationProps<Routes, "Onboarding">) => {
  const { scrollHandler, x } = useScrollHandler();
  const slides = [
    {
      id: 1,
      title: "Relaxed",
      color: "#BFEAF5",
      subTitle: "Find Your OutFits",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem minusiure atque consectetur omnis  illo ",
      picture: require("../../assets/2.png"),
    },
    {
      id: 2,
      title: "Playful",
      color: "#BEECC4",
      subTitle: "Hear it First, Wear it First",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem minusiure atque consectetur omnis  illo",
      picture: require("../../assets/3.png"),
    },
    {
      id: 3,
      title: "Excentric",
      color: "#ffe4d9",
      subTitle: "Your style, Your Way",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem minusiure atque consectetur omnis  illo",
      picture: require("../../assets/1.png"),
    },
    {
      id: 4,
      title: "Funky",
      color: "#ffdddd",
      subTitle: "Look Good, Feel Good",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem minusiure atque consectetur omnis  illo",
      picture: require("../../assets/4.png"),
    },
  ];

  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map(({ color }) => color),
  });

  const scrollRef = useRef<Animated.ScrollView>(null);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scrollRef}
          horizontal
          {...scrollHandler}
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
        >
          {slides.map(({ title, id, picture }, i) => (
            <Slide title={title} right={!!(i % 2)} key={id} picture={picture} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={[styles.footer]}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor,
          }}
        />

        <View
          style={[
            {
              ...StyleSheet.absoluteFillObject,
            },
            styles.indicatorContainer,
          ]}
        >
          {slides.map(({ id }, i) => (
            <Dot key={id} index={i} currentIndex={divide(x, width)} />
          ))}
        </View>

        <View
          style={{
            flex: 1,
            width: width,
            flexDirection: "row",
            borderTopLeftRadius: theme.borderRadii.xl,
            backgroundColor: "white",
            overflow: "hidden",
          }}
        >
          <Animated.View
            style={[
              styles.overlay,
              {
                width: width * slides.length,
                transform: [{ translateX: multiply(x, -1) }],
              },
            ]}
          >
            {slides.map(({ subTitle, description, id }, i) => {
              const last = i === slides.length - 1;
              return (
                <SubSlide
                  key={id}
                  last={last}
                  {...{ subTitle, description }}
                  onPress={() => {
                    if (last) {
                      navigation.navigate("Welcome");
                      return;
                    }
                    if (scrollRef.current) {
                      scrollRef.current
                        .getNode()
                        .scrollTo({ x: width * (i + 1), animated: true });
                    }
                  }}
                />
              );
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: theme.borderRadii.xl,
    backgroundColor: "cyan",
  },
  overlay: {
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  footer: {
    flex: 1,
  },
  indicatorContainer: {
    left: 50,
    height: 80,
    zIndex: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Onboarding;
