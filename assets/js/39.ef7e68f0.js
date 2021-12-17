(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{425:function(a,e,t){"use strict";t.r(e);var s=t(54),n=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"almalinux-8-3-release-notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#almalinux-8-3-release-notes"}},[a._v("#")]),a._v(" AlmaLinux 8.3 Release Notes")]),a._v(" "),t("h2",{attrs:{id:"installation-instructions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-instructions"}},[a._v("#")]),a._v(" Installation instructions")]),a._v(" "),t("p",[a._v("There are three installation ISO images available:")]),a._v(" "),t("p",[t("code",[a._v("AlmaLinux-8.3-x86_64-boot.iso")]),a._v(" - a single network installation CD image\nthat downloads packages over the Internet.")]),a._v(" "),t("p",[t("code",[a._v("AlmaLinux-8.3-x86_64-minimal.iso")]),a._v(" - a minimal self-containing DVD image\nthat makes possible offline installation.")]),a._v(" "),t("p",[t("code",[a._v("AlmaLinux-8.3-x86_64-dvd1.iso")]),a._v(" - a full installation DVD image that\ncontains mostly all AlmaLinux packages.")]),a._v(" "),t("p",[a._v("Select a mirror listed on the\n"),t("a",{attrs:{href:"https://mirrors.almalinux.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("mirrors.almalinux.org"),t("OutboundLink")],1),a._v(" website (please,\ndon't use the "),t("code",[a._v("repo.almalinux.org")]),a._v(" host directly) and download a suitable ISO\nimage from the "),t("code",[a._v("8.3/isos/x86_64/")]),a._v(" directory, for example:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://mirror.interserver.net/almalinux/8.3/isos/x86_64/AlmaLinux-8.3-x86_64-boot.iso\n")])])]),t("p",[a._v("Download and import the AlmaLinux public key:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://repo.almalinux.org/almalinux/RPM-GPG-KEY-AlmaLinux\n$ gpg --import RPM-GPG-KEY-AlmaLinux\n")])])]),t("p",[a._v("Download and verify a checksums list:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://repo.almalinux.org/almalinux/8.3/isos/x86_64/CHECKSUM\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# we are looking for “Good signature”")]),a._v("\n$ gpg --verify CHECKSUM\n  gpg: Signature made Fri "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("19")]),a._v(" Feb "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2021")]),a._v(" 03:04:44 PM MSK\n  gpg:                using RSA key 51D6647EC21AD6EA\n  gpg: Good signature from "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"AlmaLinux <packager@almalinux.org>"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("unknown"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  gpg: WARNING: This key is not certified with a trusted signature"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\n  gpg:          There is no indication that the signature belongs to the owner.\n  Primary key fingerprint: 5E9B 8F56 17B5 066C E920  57C3 488F CF7C 3ABB 34F8\n       Subkey fingerprint: E53C F5EF 91CE B0AD "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1812")]),a._v("  ECB8 51D6 647E C21A D6EA\n")])])]),t("p",[a._v("Verify the downloaded ISO image checksum:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# calculate the downloaded ISO SHA256 checksum")]),a._v("\n$ sha256sum AlmaLinux-8.3-x86_64-boot.iso\n08fd99fab31277ea3710bfc1ccb8a7229522af5d3987d5b062739cb0dc3b5e3e  AlmaLinux-8.3-x86_64-boot.iso\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# compare it with expected checksum, it should be the same")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" CHECKSUM "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" -E "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'SHA256.*AlmaLinux-8.3-x86_64-boot.iso'")]),a._v("\nSHA256 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("AlmaLinux-8.3-x86_64-boot.iso"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" 08fd99fab31277ea3710bfc1ccb8a7229522af5d3987d5b062739cb0dc3b5e3e\n")])])]),t("p",[a._v("If you decided to use the "),t("code",[a._v("AlmaLinux-8.3-x86_64-boot.iso")]),a._v(" image, you will\nneed to provide the "),t("code",[a._v("8.3/BaseOS/x86_64/kickstart/")]),a._v(" repository from the\nselected mirror as the Installation Source.")]),a._v(" "),t("p",[a._v("There are no extra Installation Sources required if you decided to go with\neither minimal or dvd ISO images.")]),a._v(" "),t("h2",{attrs:{id:"upgrade-instructions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-instructions"}},[a._v("#")]),a._v(" Upgrade instructions")]),a._v(" "),t("p",[a._v("Upgrade the almalinux-release package to the 8.3-3.el8 version from the beta\nor rc repositories:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ dnf clean all "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" dnf upgrade -y almalinux-release\n")])])]),t("p",[a._v("the new package contains updated repository URLs so that you can just run:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ dnf upgrade -y\n")])])]),t("p",[a._v("to update the rest of the packages.")]),a._v(" "),t("h2",{attrs:{id:"changelog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[a._v("#")]),a._v(" Changelog")]),a._v(" "),t("ul",[t("li",[a._v("The Minimal ISO now proposes to install only environments that can be\ninstalled from it ("),t("a",{attrs:{href:"https://bugs.almalinux.org/view.php?id=14",target:"_blank",rel:"noopener noreferrer"}},[a._v("almbz#14"),t("OutboundLink")],1),a._v(").")])]),a._v(" "),t("h2",{attrs:{id:"known-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#known-issues"}},[a._v("#")]),a._v(" Known issues")]),a._v(" "),t("ul",[t("li",[a._v("There is no SecureBoot support in this release\n("),t("a",{attrs:{href:"https://bugs.almalinux.org/view.php?id=3",target:"_blank",rel:"noopener noreferrer"}},[a._v("almbz#3"),t("OutboundLink")],1),a._v("). We are doing our\nbest to have it in a stable release.")]),a._v(" "),t("li",[a._v('The mirrors support implemented with help of the DNF fastestmirror plugin\nthat is known to be a bit "quirky". We are going to switch to\ngeo-location-based mirror selection in the stable version.')])])])}),[],!1,null,null,null);e.default=n.exports}}]);