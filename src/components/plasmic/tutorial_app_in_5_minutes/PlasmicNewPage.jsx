// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tM5Rf7fgRF2S7R5X1hHCpZ
// Component: 2D-j5aRx2czA
import * as React from "react";
import {
  PlasmicImg as PlasmicImg__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tM5Rf7fgRF2S7R5X1hHCpZ/projectcss
import sty from "./PlasmicNewPage.module.css"; // plasmic-import: 2D-j5aRx2czA/css
import Group389Icon from "./icons/PlasmicIcon__Group389"; // plasmic-import: RxtJsE9Y31sR/icon
import GroupIcon from "./icons/PlasmicIcon__Group"; // plasmic-import: DsojCG0D2XcY/icon
import Group2Icon from "./icons/PlasmicIcon__Group2"; // plasmic-import: kqZM5mVB4vv2/icon
import Line37Icon from "./icons/PlasmicIcon__Line37"; // plasmic-import: cbp8cnDhxEyh/icon
import Line38Icon from "./icons/PlasmicIcon__Line38"; // plasmic-import: puRJPH4ZSVLW/icon
import OtherIconFacebookIcon from "./icons/PlasmicIcon__OtherIconFacebook"; // plasmic-import: 3L9gRnoZtHH7/icon
import group121CvaA91I46F3 from "./images/group121.svg"; // plasmic-import: cvaA91i4_6f3/picture

createPlasmicElementProxy;

export const PlasmicNewPage__VariantProps = new Array();

export const PlasmicNewPage__ArgProps = new Array();

const $$ = {};

function PlasmicNewPage__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"login"}
            data-plasmic-override={overrides.login}
            className={classNames(projectcss.all, sty.login)}
          >
            <div
              data-plasmic-name={"icon"}
              data-plasmic-override={overrides.icon}
              className={classNames(projectcss.all, sty.icon)}
            >
              <div
                data-plasmic-name={"rectangle383"}
                data-plasmic-override={overrides.rectangle383}
                className={classNames(projectcss.all, sty.rectangle383)}
              />

              <div
                data-plasmic-name={"group400"}
                data-plasmic-override={overrides.group400}
                className={classNames(projectcss.all, sty.group400)}
              >
                <Group389Icon
                  className={classNames(projectcss.all, sty.svg__v038)}
                  role={"img"}
                />
              </div>
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__taG4
              )}
            >
              {"Welcome to Lafyuu"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___6CbXp
              )}
            >
              {"Sign in to continue"}
            </div>
            <div
              data-plasmic-name={"emailForm"}
              data-plasmic-override={overrides.emailForm}
              className={classNames(projectcss.all, sty.emailForm)}
            >
              <div
                data-plasmic-name={"systemIcon24PxMessage"}
                data-plasmic-override={overrides.systemIcon24PxMessage}
                className={classNames(
                  projectcss.all,
                  sty.systemIcon24PxMessage
                )}
              >
                <GroupIcon
                  className={classNames(projectcss.all, sty.svg__jPhg6)}
                  role={"img"}
                />
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__tvlhx
                )}
              >
                {"Your Email"}
              </div>
            </div>
            <div
              data-plasmic-name={"passwordForm"}
              data-plasmic-override={overrides.passwordForm}
              className={classNames(projectcss.all, sty.passwordForm)}
            >
              <div
                data-plasmic-name={"systemIcon24PxPassword"}
                data-plasmic-override={overrides.systemIcon24PxPassword}
                className={classNames(
                  projectcss.all,
                  sty.systemIcon24PxPassword
                )}
              >
                <Group2Icon
                  className={classNames(projectcss.all, sty.svg___6L4M1)}
                  role={"img"}
                />
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__a3Jht
                )}
              >
                {"Password"}
              </div>
            </div>
            <Stack__
              as={"div"}
              data-plasmic-name={"signInButton"}
              data-plasmic-override={overrides.signInButton}
              hasGap={true}
              className={classNames(projectcss.all, sty.signInButton)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__dSuVf
                )}
              >
                {"Sign In"}
              </div>
            </Stack__>
            <div
              data-plasmic-name={"orLine"}
              data-plasmic-override={overrides.orLine}
              className={classNames(projectcss.all, sty.orLine)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__wwYRa
                )}
              >
                {"OR"}
              </div>
              <Line37Icon
                className={classNames(projectcss.all, sty.svg__m2WeZ)}
                role={"img"}
              />

              <Line38Icon
                className={classNames(projectcss.all, sty.svg__cAkF)}
                role={"img"}
              />
            </div>
            <Stack__
              as={"div"}
              data-plasmic-name={"loginWithGoogleButton"}
              data-plasmic-override={overrides.loginWithGoogleButton}
              hasGap={true}
              className={classNames(projectcss.all, sty.loginWithGoogleButton)}
            >
              <div
                data-plasmic-name={"otherIconGoogle"}
                data-plasmic-override={overrides.otherIconGoogle}
                className={classNames(projectcss.all, sty.otherIconGoogle)}
              >
                <PlasmicImg__
                  data-plasmic-name={"img"}
                  data-plasmic-override={overrides.img}
                  alt={""}
                  className={classNames(sty.img)}
                  displayHeight={"16px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"16px"}
                  loading={"lazy"}
                  src={{
                    src: group121CvaA91I46F3,
                    fullWidth: 16,
                    fullHeight: 16,
                    aspectRatio: 1
                  }}
                />
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__e6UeH
                )}
              >
                {"Login with Google"}
              </div>
            </Stack__>
            <Stack__
              as={"div"}
              data-plasmic-name={"loginWithFacebookButton"}
              data-plasmic-override={overrides.loginWithFacebookButton}
              hasGap={true}
              className={classNames(
                projectcss.all,
                sty.loginWithFacebookButton
              )}
            >
              <OtherIconFacebookIcon
                className={classNames(projectcss.all, sty.svg__m9PA9)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__sEYqr
                )}
              >
                {"Login with facebook"}
              </div>
            </Stack__>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__m2ZZb
              )}
            >
              {"Forgot Password?"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__yBz9P
              )}
            >
              {"Don\u2019t have a account? Register"}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "login",
    "icon",
    "rectangle383",
    "group400",
    "emailForm",
    "systemIcon24PxMessage",
    "passwordForm",
    "systemIcon24PxPassword",
    "signInButton",
    "orLine",
    "loginWithGoogleButton",
    "otherIconGoogle",
    "img",
    "loginWithFacebookButton"
  ],

  login: [
    "login",
    "icon",
    "rectangle383",
    "group400",
    "emailForm",
    "systemIcon24PxMessage",
    "passwordForm",
    "systemIcon24PxPassword",
    "signInButton",
    "orLine",
    "loginWithGoogleButton",
    "otherIconGoogle",
    "img",
    "loginWithFacebookButton"
  ],

  icon: ["icon", "rectangle383", "group400"],
  rectangle383: ["rectangle383"],
  group400: ["group400"],
  emailForm: ["emailForm", "systemIcon24PxMessage"],
  systemIcon24PxMessage: ["systemIcon24PxMessage"],
  passwordForm: ["passwordForm", "systemIcon24PxPassword"],
  systemIcon24PxPassword: ["systemIcon24PxPassword"],
  signInButton: ["signInButton"],
  orLine: ["orLine"],
  loginWithGoogleButton: ["loginWithGoogleButton", "otherIconGoogle", "img"],
  otherIconGoogle: ["otherIconGoogle", "img"],
  img: ["img"],
  loginWithFacebookButton: ["loginWithFacebookButton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicNewPage__ArgProps,
          internalVariantPropNames: PlasmicNewPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNewPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewPage";
  } else {
    func.displayName = `PlasmicNewPage.${nodeName}`;
  }
  return func;
}

export const PlasmicNewPage = Object.assign(
  // Top-level PlasmicNewPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    login: makeNodeComponent("login"),
    icon: makeNodeComponent("icon"),
    rectangle383: makeNodeComponent("rectangle383"),
    group400: makeNodeComponent("group400"),
    emailForm: makeNodeComponent("emailForm"),
    systemIcon24PxMessage: makeNodeComponent("systemIcon24PxMessage"),
    passwordForm: makeNodeComponent("passwordForm"),
    systemIcon24PxPassword: makeNodeComponent("systemIcon24PxPassword"),
    signInButton: makeNodeComponent("signInButton"),
    orLine: makeNodeComponent("orLine"),
    loginWithGoogleButton: makeNodeComponent("loginWithGoogleButton"),
    otherIconGoogle: makeNodeComponent("otherIconGoogle"),
    img: makeNodeComponent("img"),
    loginWithFacebookButton: makeNodeComponent("loginWithFacebookButton"),
    // Metadata about props expected for PlasmicNewPage
    internalVariantProps: PlasmicNewPage__VariantProps,
    internalArgProps: PlasmicNewPage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicNewPage;
/* prettier-ignore-end */
