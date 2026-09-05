## [4.0.1](https://github.com/randytarampi/pseudoimage/compare/v4.0.0...v4.0.1) (2026-09-05)


### Bug Fixes

* **ci:** add environment: production, fix stale .releaserc assets. Travis references begone. 🪦 ([6b46e68](https://github.com/randytarampi/pseudoimage/commit/6b46e68ca2101feb3bf000c3ca4d39d3bb9f3571))
* **ci:** add environment: production, fix stale .releaserc assets. Travis references begone. 🪦 ([b5bf67c](https://github.com/randytarampi/pseudoimage/commit/b5bf67ce8d43c40563fdc59f39f4bd1a26b5f0d1))
* **ci:** add Node 20/22/24/26 test matrix. We say >=20, let's prove it. 🧪 ([a6af281](https://github.com/randytarampi/pseudoimage/commit/a6af28198deb9afdb2107924c47e5adeaf66870e))
* **ci:** add Node 20/22/24/26 test matrix. We say >=20, let's prove it. 🧪 ([d59e056](https://github.com/randytarampi/pseudoimage/commit/d59e0562a6ebeb3dc1a54fff68aab8df83c61068))
* **ci:** checkout sibling lwip for portal deps ([70b97cb](https://github.com/randytarampi/pseudoimage/commit/70b97cbc1206df7aca722cfc1a438feea3ddc89e))
* **ci:** checkout sibling lwip for portal deps ([8434e6b](https://github.com/randytarampi/pseudoimage/commit/8434e6b92dd9b4890de2a6b415a1d9e54bc8a488))
* **ci:** disable Yarn hardened mode — portal deps need lockfile resolution in PR CI. 🤝 ([d56c195](https://github.com/randytarampi/pseudoimage/commit/d56c195417cb50857df84ce3c1c5591a71aa94d7))
* **ci:** disable Yarn hardened mode — portal deps need lockfile resolution in PR CI. 🤝 ([574e4b7](https://github.com/randytarampi/pseudoimage/commit/574e4b71351f397c77e3985d072b63988d94e59b))
* **ci:** disable yarn hardening and hound eslint ([ef3dfc0](https://github.com/randytarampi/pseudoimage/commit/ef3dfc093309fa307d2674b1cc75afa89121a4e7))
* **ci:** disable yarn hardening and hound eslint ([0bc8bfb](https://github.com/randytarampi/pseudoimage/commit/0bc8bfb1cd8b647535295ba99e5e9266c5d19d36))
* **ci:** fetch full git history for --since to work. Shallow clones don't have master ref. 🤦‍♂️ ([08abad8](https://github.com/randytarampi/pseudoimage/commit/08abad8ac3d91d203ad8b15c582c8193d7b0fa69))
* **ci:** fetch full git history for --since to work. Shallow clones don't have master ref. 🤦‍♂️ ([2f148bd](https://github.com/randytarampi/pseudoimage/commit/2f148bdff7d3be006f2f4610c81dbe3f8302efd7))
* **ci:** regenerate yarn.lock. CI was trying to modify it, now it won't need to. 🔄 ([dade747](https://github.com/randytarampi/pseudoimage/commit/dade7471bf22a22fcb05d624cf4624345a429a9b))
* **ci:** regenerate yarn.lock. CI was trying to modify it, now it won't need to. 🔄 ([1063a85](https://github.com/randytarampi/pseudoimage/commit/1063a85a73289b14f643f0afa17b4c460f39bbde))
* **ci:** relax yarn install flags ([f82160c](https://github.com/randytarampi/pseudoimage/commit/f82160ce79098824fcf8edcaf978b976e407f3a9))
* **ci:** relax yarn install flags ([99afff8](https://github.com/randytarampi/pseudoimage/commit/99afff8be420f174c43644c195605456c7bf6cd8))
* **deps:** resolve lwip to a node 24 compatible build ([7f792d9](https://github.com/randytarampi/pseudoimage/commit/7f792d9c43ba3a1be4c31de578296ce6cebd5026))
* **lint:** handle sinon bundle syntax ([43a6123](https://github.com/randytarampi/pseudoimage/commit/43a612373a2a25b98f4b717135afe3412235563e))
* package.json & package-lock.json to reduce vulnerabilities ([5d1ce83](https://github.com/randytarampi/pseudoimage/commit/5d1ce8355b7519dcd311b2e40f7d917f4a68e9e5))
* package.json & package-lock.json to reduce vulnerabilities ([0f9c3ae](https://github.com/randytarampi/pseudoimage/commit/0f9c3ae44a4eab9039ea5dfd1b52d87c7b72d7fa))
* package.json & package-lock.json to reduce vulnerabilities ([9491414](https://github.com/randytarampi/pseudoimage/commit/9491414e9617eaa99e93842d9be781bce0606897))
* package.json & package-lock.json to reduce vulnerabilities ([5244aa5](https://github.com/randytarampi/pseudoimage/commit/5244aa5df32f9a770136ea033c99e083723c2b05))
* package.json & package-lock.json to reduce vulnerabilities ([2fad209](https://github.com/randytarampi/pseudoimage/commit/2fad209a824ed991873e6b774ea4a623cf4ef901))
* package.json & package-lock.json to reduce vulnerabilities ([d87b2b0](https://github.com/randytarampi/pseudoimage/commit/d87b2b0591272c65b9b518dec291116fc32700ed))
* **publish:** enable npm provenance for trusted publishing. Supply chain trust matters. 🔏 ([e4ee7b8](https://github.com/randytarampi/pseudoimage/commit/e4ee7b8a530b7caca632f0e27c5f8c18b4d2f2fc))
* swap portal deps to published version ranges. 🤝 ([c071422](https://github.com/randytarampi/pseudoimage/commit/c071422d19041d7b81c31d888dac9710015296aa))
* swap portal deps to published version ranges. 🤝 ([5923050](https://github.com/randytarampi/pseudoimage/commit/592305066a4841b9aa202217bc5fd887eedaf2c9))
* upgrade @semantic-release/git from 9.0.0 to 9.0.1 ([1653059](https://github.com/randytarampi/pseudoimage/commit/16530595dae46c028ebfddf7bdeb8766557c874b))
* upgrade chai from 4.2.0 to 4.3.0 ([25cc073](https://github.com/randytarampi/pseudoimage/commit/25cc073303d1ff356916ab73fef35985db3bfb89))
* upgrade chai from 4.3.0 to 4.3.1 ([2933be4](https://github.com/randytarampi/pseudoimage/commit/2933be4851edd5abbd19f7901475d686a8824db9))
* upgrade chai from 4.3.1 to 4.3.3 ([1bd8e32](https://github.com/randytarampi/pseudoimage/commit/1bd8e324816869d2a373ee2cab71cfcf60fa6ce9))
* upgrade chai from 4.3.3 to 4.3.4 ([9ece6d9](https://github.com/randytarampi/pseudoimage/commit/9ece6d961364e351b616a2dbd53af141ce90141f))
* upgrade commander from 6.2.0 to 6.2.1 ([ed0146c](https://github.com/randytarampi/pseudoimage/commit/ed0146ceead83c7d9d2f6d86125e4c4cd5435b1e))
* upgrade coveralls from 3.1.0 to 3.1.1 ([ae9f9cf](https://github.com/randytarampi/pseudoimage/commit/ae9f9cf8dba1ce3763dda208527c2ca00932bcb2))
* upgrade cross-env from 7.0.2 to 7.0.3 ([0b4ac1d](https://github.com/randytarampi/pseudoimage/commit/0b4ac1d7102f458921d2b40b351e5956bd05fb46))
* upgrade eslint-plugin-import from 2.22.1 to 2.23.0 ([a982254](https://github.com/randytarampi/pseudoimage/commit/a9822544d77ed014af0766f3c2e29b18285b5e64))
* upgrade eslint-plugin-import from 2.23.0 to 2.23.2 ([cfd6bb3](https://github.com/randytarampi/pseudoimage/commit/cfd6bb3e6b22948d6d97a59185fafe621ff6ba5d))
* upgrade eslint-plugin-import from 2.23.2 to 2.23.3 ([00750fc](https://github.com/randytarampi/pseudoimage/commit/00750fcd3af4d6ad909dd0f242bf97f9bfc5ca61))
* upgrade eslint-plugin-import from 2.23.3 to 2.23.4 ([96b4e73](https://github.com/randytarampi/pseudoimage/commit/96b4e736d50a5612ec930a6a57fe734aa6d95dc8))
* upgrade mocha from 8.2.1 to 8.3.0 ([0fc2a99](https://github.com/randytarampi/pseudoimage/commit/0fc2a99b1cd9b3625008f95388b90f5b450eac7d))
* upgrade mocha from 8.3.0 to 8.3.1 ([86decb7](https://github.com/randytarampi/pseudoimage/commit/86decb73cf7f5969f259868ccc780504ce8dc67c))
* upgrade mocha from 8.3.1 to 8.3.2 ([354641d](https://github.com/randytarampi/pseudoimage/commit/354641d759ae59c9bc185d60234a046f87ea86b8))
* upgrade mocha from 8.3.2 to 8.4.0 ([c731ad1](https://github.com/randytarampi/pseudoimage/commit/c731ad16869a253f7e6c1d073420078a499a344f))
* upgrade semantic-release from 17.2.4 to 17.3.0 ([291a428](https://github.com/randytarampi/pseudoimage/commit/291a428b2182deb0e308444a8bed2b9915f9f108))
* upgrade semantic-release from 17.3.1 to 17.3.2 ([f7f4415](https://github.com/randytarampi/pseudoimage/commit/f7f44152eab1d58fff336c791d5368a09dc80158))
* upgrade semantic-release from 17.3.2 to 17.3.3 ([3392677](https://github.com/randytarampi/pseudoimage/commit/3392677c2257ec45cf24b0a7f317f7df7055b411))
* upgrade semantic-release from 17.3.3 to 17.3.7 ([88dedb4](https://github.com/randytarampi/pseudoimage/commit/88dedb40a9dd60271b1591190bf7d4b91dc5c30d))
* upgrade semantic-release from 17.3.7 to 17.3.8 ([3f1aa27](https://github.com/randytarampi/pseudoimage/commit/3f1aa272caea08edcf18622210c994fa63d4fb14))
* upgrade semantic-release from 17.3.8 to 17.3.9 ([bfb81f6](https://github.com/randytarampi/pseudoimage/commit/bfb81f6aa46b759dd735de178144a999326fe5f9))
* upgrade semantic-release from 17.3.9 to 17.4.0 ([e88b530](https://github.com/randytarampi/pseudoimage/commit/e88b53041721d6f6cc58fade87655dc855f5e828))
* upgrade semantic-release from 17.4.0 to 17.4.1 ([e41ffd6](https://github.com/randytarampi/pseudoimage/commit/e41ffd6c9168bae7d3afbd3cce2fc8b0a60d5a59))
* upgrade semantic-release from 17.4.1 to 17.4.2 ([12f3755](https://github.com/randytarampi/pseudoimage/commit/12f3755f8eb3b5e5298cc6aa460e200f3523923d))
* upgrade semantic-release from 17.4.2 to 17.4.3 ([06f0cb9](https://github.com/randytarampi/pseudoimage/commit/06f0cb93fd2a241c9000091798bb6b22828df5bd))
* upgrade semantic-release from 17.4.3 to 17.4.4 ([2588778](https://github.com/randytarampi/pseudoimage/commit/2588778e474b96495713a061aa051c385f2cce58))
* upgrade sinon from 9.2.1 to 9.2.2 ([c9ed693](https://github.com/randytarampi/pseudoimage/commit/c9ed6937a66109de48fb429173cdd78e0f931bf7))
* upgrade sinon from 9.2.2 to 9.2.3 ([9080ab1](https://github.com/randytarampi/pseudoimage/commit/9080ab1672f7316308da928a085b7d1e1e5be53d))
* upgrade sinon from 9.2.3 to 9.2.4 ([68b19ce](https://github.com/randytarampi/pseudoimage/commit/68b19ce36615eac5d17bd9e321b0eadef33a8ec2))
* upgrade snyk from 1.430.0 to 1.430.2 ([ba6c4ed](https://github.com/randytarampi/pseudoimage/commit/ba6c4edb0e6605a0cfed45badf968629e3b55eb9))
* upgrade snyk from 1.430.2 to 1.431.2 ([7243608](https://github.com/randytarampi/pseudoimage/commit/724360862af2e400ad93b427c61d9e4c407757e2))
* upgrade snyk from 1.431.2 to 1.431.4 ([0653a79](https://github.com/randytarampi/pseudoimage/commit/0653a795ef3d194d512aab537d8fa55a811e7f9b))
* upgrade snyk from 1.431.4 to 1.433.0 ([ded82b4](https://github.com/randytarampi/pseudoimage/commit/ded82b4f1c3498889bdeb68ff27b9cbd9ac232db))
* upgrade snyk from 1.433.0 to 1.434.0 ([d635ee1](https://github.com/randytarampi/pseudoimage/commit/d635ee1e95cb7aea813a085dff7dae80a75db786))
* upgrade snyk from 1.434.0 to 1.434.2 ([0c19db1](https://github.com/randytarampi/pseudoimage/commit/0c19db16758069f62f20a69fee83b75ec1a76fe6))
* upgrade snyk from 1.434.2 to 1.434.3 ([1e00868](https://github.com/randytarampi/pseudoimage/commit/1e008681f07d58709dfb2233300de4a155cb4f69))
* upgrade snyk from 1.434.3 to 1.436.0 ([8e47b70](https://github.com/randytarampi/pseudoimage/commit/8e47b707f03e2d4217dcf9c9c3add1aa0e0b59f7))
* upgrade snyk from 1.436.0 to 1.437.0 ([de57e67](https://github.com/randytarampi/pseudoimage/commit/de57e67f1826a471e98cccd01003704673cc500c))
* upgrade snyk from 1.437.0 to 1.437.1 ([42b2e00](https://github.com/randytarampi/pseudoimage/commit/42b2e00fa7c15503616a76a5426d5ae8aa84fddd))
* upgrade snyk from 1.437.1 to 1.437.2 ([0b002dd](https://github.com/randytarampi/pseudoimage/commit/0b002dd18f8e3386feda251216b173301cdc8a1a))
* upgrade snyk from 1.437.2 to 1.437.3 ([b8f8775](https://github.com/randytarampi/pseudoimage/commit/b8f8775f6def950140089f12a7a410236263c14a))
* upgrade snyk from 1.437.3 to 1.437.4 ([f56ff30](https://github.com/randytarampi/pseudoimage/commit/f56ff30ee384ef5d80f6780ac73017ae48402f87))
* upgrade snyk from 1.437.4 to 1.438.0 ([bf98d83](https://github.com/randytarampi/pseudoimage/commit/bf98d8385073e71513e2385b11bdb0fbfccbc3dc))
* upgrade snyk from 1.438.0 to 1.439.0 ([8dc02e2](https://github.com/randytarampi/pseudoimage/commit/8dc02e2a63486ac8d059813a00fa445e091f806e))
* upgrade snyk from 1.439.0 to 1.439.1 ([a8f9e0a](https://github.com/randytarampi/pseudoimage/commit/a8f9e0ad18214421b7d12157e610878e96f9dc77))
* upgrade snyk from 1.439.1 to 1.458.0 ([9d64f4d](https://github.com/randytarampi/pseudoimage/commit/9d64f4df62160b93d8cfd41907f15c457c945a13))
* upgrade snyk from 1.458.0 to 1.459.0 ([5d25bab](https://github.com/randytarampi/pseudoimage/commit/5d25babf43be93ee550ebbe0e99dad018ad4c555))
* upgrade snyk from 1.459.0 to 1.460.0 ([5dc2068](https://github.com/randytarampi/pseudoimage/commit/5dc2068b8c01828d6f6945c72cb712e0e53fbe8f))
* upgrade snyk from 1.460.0 to 1.461.0 ([8922ff1](https://github.com/randytarampi/pseudoimage/commit/8922ff12929e7ba26367d3761ee3d40c532cd5a4))
* upgrade snyk from 1.461.0 to 1.462.0 ([42b4090](https://github.com/randytarampi/pseudoimage/commit/42b40906a7416dd268997336f8d11b0f8fd0c57b))
* upgrade snyk from 1.462.0 to 1.464.0 ([4079658](https://github.com/randytarampi/pseudoimage/commit/4079658f84ad18f4d43bc510373ba2e97d873ba4))
* upgrade snyk from 1.464.0 to 1.467.0 ([5b6a06c](https://github.com/randytarampi/pseudoimage/commit/5b6a06cdd4de2407194f88f08cd6afe1e9b5c1e1))
* upgrade snyk from 1.467.0 to 1.471.0 ([8e0a7aa](https://github.com/randytarampi/pseudoimage/commit/8e0a7aa5b5c99eb41dd6f9e27df415bdc41b2d8d))
* upgrade snyk from 1.471.0 to 1.476.0 ([6183212](https://github.com/randytarampi/pseudoimage/commit/6183212827ca82860d745e94d4b8ab9da5796a47))
* upgrade snyk from 1.476.0 to 1.486.0 ([2aee9c7](https://github.com/randytarampi/pseudoimage/commit/2aee9c71df947c0f44d5450a9808cb38d62190a1))
* upgrade snyk from 1.486.0 to 1.489.0 ([c2a7c89](https://github.com/randytarampi/pseudoimage/commit/c2a7c89e69fec8aa5d3b9c2bdb4f247e0c4a77b0))
* upgrade snyk from 1.489.0 to 1.491.0 ([4d8f1f5](https://github.com/randytarampi/pseudoimage/commit/4d8f1f5e0d1e6cfb7fc0f2a8b6e9c02315d9dadf))
* upgrade snyk from 1.491.0 to 1.495.0 ([9b0dccc](https://github.com/randytarampi/pseudoimage/commit/9b0dccc577f9b1a2348e208f17673cede018efa1))
* upgrade snyk from 1.495.0 to 1.500.0 ([7283790](https://github.com/randytarampi/pseudoimage/commit/72837901a0670cd7fb614d2775e0f0799fc5e496))
* upgrade snyk from 1.500.0 to 1.502.0 ([5124a34](https://github.com/randytarampi/pseudoimage/commit/5124a34244e29498f26f4e9dc9651b613c03d259))
* upgrade snyk from 1.502.0 to 1.509.0 ([4a73e8f](https://github.com/randytarampi/pseudoimage/commit/4a73e8f8da3d8b47db01ca9834701e16f8127573))
* upgrade snyk from 1.509.0 to 1.511.0 ([c1e7535](https://github.com/randytarampi/pseudoimage/commit/c1e753505a7f95bbb71dae219444ff0aee1d57b0))
* upgrade snyk from 1.511.0 to 1.518.0 ([4c12668](https://github.com/randytarampi/pseudoimage/commit/4c12668e079a8550fb06afd8d08dcd02199f4b68))
* upgrade snyk from 1.518.0 to 1.520.0 ([3638bf1](https://github.com/randytarampi/pseudoimage/commit/3638bf1b8da23b7b653285500f71883fbd7928ad))
* upgrade snyk from 1.520.0 to 1.526.0 ([81f3877](https://github.com/randytarampi/pseudoimage/commit/81f387708c44313e16419903a96862828ddceee3))
* upgrade snyk from 1.526.0 to 1.528.0 ([cc8e7eb](https://github.com/randytarampi/pseudoimage/commit/cc8e7eb78978a9754607638050228fe93ad49d95))
* upgrade snyk from 1.528.0 to 1.529.0 ([32acd5b](https://github.com/randytarampi/pseudoimage/commit/32acd5b3a18a05af44940cacfc1b32a5da05d91e))
* upgrade snyk from 1.529.0 to 1.532.0 ([c25906f](https://github.com/randytarampi/pseudoimage/commit/c25906f1166a43988e4013875fd5a5451850dc3c))
* upgrade snyk from 1.532.0 to 1.541.0 ([5815f69](https://github.com/randytarampi/pseudoimage/commit/5815f69bb7cd17b660279dfa876299e3b8f1ea03))
* upgrade snyk from 1.541.0 to 1.543.0 ([28bcd09](https://github.com/randytarampi/pseudoimage/commit/28bcd0915adf5cb3d685973ee2068a460916ea62))
* upgrade snyk from 1.543.0 to 1.550.0 ([e6668fd](https://github.com/randytarampi/pseudoimage/commit/e6668fd20181190ad12a9a25ed8e0a219f007909))
* upgrade snyk from 1.550.0 to 1.551.0 ([843a64a](https://github.com/randytarampi/pseudoimage/commit/843a64af9e41bb3acab30c52da8cc6883f93cb7d))
* upgrade snyk from 1.551.0 to 1.557.0 ([58e2a4d](https://github.com/randytarampi/pseudoimage/commit/58e2a4d3319246c46349f65545b8770c28dcc0d2))
* upgrade snyk from 1.557.0 to 1.563.0 ([dcef07a](https://github.com/randytarampi/pseudoimage/commit/dcef07a221075cafce07551f098baa1230e7f16d))
* upgrade snyk from 1.563.0 to 1.564.0 ([8c8c0ea](https://github.com/randytarampi/pseudoimage/commit/8c8c0ea693eff6a46cc7e7edf8f4cee5f153edda))
* upgrade snyk from 1.564.0 to 1.566.0 ([38ce155](https://github.com/randytarampi/pseudoimage/commit/38ce15589ef412e40253c7135c99d333c1d21b9d))
* upgrade snyk from 1.566.0 to 1.570.0 ([e09491a](https://github.com/randytarampi/pseudoimage/commit/e09491a222d201507ce8e77e898a0777ce3f796a))
* upgrade snyk from 1.570.0 to 1.575.0 ([01ce5fa](https://github.com/randytarampi/pseudoimage/commit/01ce5fa91bf5901a4fcdea8dc134d0f101cd321e))
* upgrade snyk from 1.575.0 to 1.586.0 ([ca900d7](https://github.com/randytarampi/pseudoimage/commit/ca900d70effd56c864ad15847c4b35adf16e7eb1))
* upgrade snyk from 1.586.0 to 1.587.0 ([d55305e](https://github.com/randytarampi/pseudoimage/commit/d55305e7e747e5bed0692cdba0abe35de5084b32))
* upgrade snyk from 1.587.0 to 1.590.0 ([e781faa](https://github.com/randytarampi/pseudoimage/commit/e781faaa4357511ac2a959caa17825643cc44c16))
* upgrade snyk from 1.590.0 to 1.592.0 ([cc34598](https://github.com/randytarampi/pseudoimage/commit/cc34598e483952e3320f040933f58d8e1cd2dc46))
* upgrade snyk from 1.592.0 to 1.595.0 ([4136972](https://github.com/randytarampi/pseudoimage/commit/413697233c497836bec127ec31226c0a2f50c217))
* upgrade snyk from 1.595.0 to 1.596.0 ([6c853c7](https://github.com/randytarampi/pseudoimage/commit/6c853c7d59c0b38c7d498bf1d0442b5326f728dd))
* upgrade snyk from 1.596.0 to 1.604.0 ([ea0e9a8](https://github.com/randytarampi/pseudoimage/commit/ea0e9a857e29b0828d8a467b8827acce6b65ce44))
* upgrade snyk from 1.604.0 to 1.605.0 ([0b9fcc7](https://github.com/randytarampi/pseudoimage/commit/0b9fcc771494b46dc86bfd2a364a60c5fe31e64d))
* upgrade snyk from 1.605.0 to 1.616.0 ([acd22b1](https://github.com/randytarampi/pseudoimage/commit/acd22b1c28a55178d929fa90b57ece4f0eafb005))
* upgrade snyk from 1.616.0 to 1.618.0 ([f658391](https://github.com/randytarampi/pseudoimage/commit/f658391f20b3f604cf54912d46be5864c650d545))
* upgrade snyk from 1.618.0 to 1.620.0 ([1f67a16](https://github.com/randytarampi/pseudoimage/commit/1f67a16266176bd6310d1c145537fc7e51440246))
* upgrade snyk from 1.620.0 to 1.621.0 ([f71a0db](https://github.com/randytarampi/pseudoimage/commit/f71a0db8c86e2c17fa6b767a9a84ee48b6275a86))
* upgrade snyk from 1.621.0 to 1.622.0 ([612109e](https://github.com/randytarampi/pseudoimage/commit/612109ef8759e7c66a4d8c2588a1caa9bdbd30bf))
* upgrade snyk from 1.622.0 to 1.623.0 ([0789d09](https://github.com/randytarampi/pseudoimage/commit/0789d096a442999522d7fcada90f2a132587e6c6))
* upgrade snyk from 1.623.0 to 1.628.0 ([ae9df53](https://github.com/randytarampi/pseudoimage/commit/ae9df53ca264b497ba9d01f898b158f4d92b62e3))
* upgrade snyk from 1.628.0 to 1.653.0 ([80392f0](https://github.com/randytarampi/pseudoimage/commit/80392f017ce4cec75cf09074cc0080f8f7e8ac3e))
* upgrade snyk from 1.653.0 to 1.655.0 ([5bf060d](https://github.com/randytarampi/pseudoimage/commit/5bf060dd1742002ba2cec00592a3689c2f40aaee))

# [4.0.0](https://github.com/randytarampi/pseudoimage/compare/v3.1.19...v4.0.0) (2020-11-22)


### chore

* **package:** Upgrade packages for 2020-11-22. ([e2eedc7](https://github.com/randytarampi/pseudoimage/commit/e2eedc76c8cf971cf75432773eba1222d69cc11f))


### BREAKING CHANGES

* **package:** Drop support for node<9.

## [3.1.19](https://github.com/randytarampi/pseudoimage/compare/v3.1.18...v3.1.19) (2020-10-31)


### Bug Fixes

* upgrade commander from 6.1.0 to 6.2.0 ([187ba25](https://github.com/randytarampi/pseudoimage/commit/187ba25710349184b2f48e87f89996c9f7f6e13c))
* upgrade semantic-release from 17.2.1 to 17.2.2 ([0cbe72e](https://github.com/randytarampi/pseudoimage/commit/0cbe72e8e7340eab13e9eab8612e2d93270a03c5))
* upgrade sinon from 9.2.0 to 9.2.1 ([8dd3d42](https://github.com/randytarampi/pseudoimage/commit/8dd3d4256eaa278933016b1d4d54703960ce8dcc))
* upgrade snyk from 1.416.0 to 1.419.0 ([776690b](https://github.com/randytarampi/pseudoimage/commit/776690ba9778b6dd8779c05b4094dd922596251c))

## [3.1.18](https://github.com/randytarampi/pseudoimage/compare/v3.1.17...v3.1.18) (2020-10-21)


### Bug Fixes

* upgrade snyk from 1.415.0 to 1.416.0 ([4e544f0](https://github.com/randytarampi/pseudoimage/commit/4e544f01c9e116832f4ecdba7bce8989f7a46299))

## [3.1.17](https://github.com/randytarampi/pseudoimage/compare/v3.1.16...v3.1.17) (2020-10-20)


### Bug Fixes

* upgrade snyk from 1.414.1 to 1.415.0 ([615a083](https://github.com/randytarampi/pseudoimage/commit/615a0835f80eeed7294054e76a4b54b697eb90fd))

## [3.1.16](https://github.com/randytarampi/pseudoimage/compare/v3.1.15...v3.1.16) (2020-10-19)


### Bug Fixes

* upgrade semantic-release from 17.2.0 to 17.2.1 ([54535e1](https://github.com/randytarampi/pseudoimage/commit/54535e15297ad461cfe39dcfedd3951bf9c568fc))
* upgrade snyk from 1.406.0 to 1.414.1 ([05a3dd8](https://github.com/randytarampi/pseudoimage/commit/05a3dd846899214e719dec4acd0ddbb159a949b9))

## [3.1.15](https://github.com/randytarampi/pseudoimage/compare/v3.1.14...v3.1.15) (2020-10-18)


### Bug Fixes

* package.json & package-lock.json to reduce vulnerabilities ([a2fe951](https://github.com/randytarampi/pseudoimage/commit/a2fe95104aee229f4d36f0e0bb40025980c1edd9))
* upgrade semantic-release from 17.1.2 to 17.2.0 ([672b0d0](https://github.com/randytarampi/pseudoimage/commit/672b0d02b9d8f6f4fc70e768b3982394436bb495))
* upgrade sinon from 9.1.0 to 9.2.0 ([d3367d9](https://github.com/randytarampi/pseudoimage/commit/d3367d9fa9d33297cdb5afac9f1496930ae39cf4))
* upgrade snyk from 1.405.1 to 1.406.0 ([1fe406b](https://github.com/randytarampi/pseudoimage/commit/1fe406b64b75d7ca819f1d47716af1bf1c543e5e))

## [3.1.14](https://github.com/randytarampi/pseudoimage/compare/v3.1.13...v3.1.14) (2020-10-03)


### Bug Fixes

* upgrade snyk from 1.402.0 to 1.405.1 ([3698864](https://github.com/randytarampi/pseudoimage/commit/3698864270872c0c988372744460bc43658850a5))

## [3.1.13](https://github.com/randytarampi/pseudoimage/compare/v3.1.12...v3.1.13) (2020-10-01)


### Bug Fixes

* upgrade sinon from 9.0.3 to 9.1.0 ([fd4e2fd](https://github.com/randytarampi/pseudoimage/commit/fd4e2fd6f4788f9f742b668966d8b73254232d9f))
* upgrade snyk from 1.400.0 to 1.402.0 ([a9a47d9](https://github.com/randytarampi/pseudoimage/commit/a9a47d90caa7c59b7f2ff1cea08303dfe5ad5918))

## [3.1.12](https://github.com/randytarampi/pseudoimage/compare/v3.1.11...v3.1.12) (2020-09-29)


### Bug Fixes

* upgrade eslint-plugin-import from 2.22.0 to 2.22.1 ([7c2452a](https://github.com/randytarampi/pseudoimage/commit/7c2452a471d3fdf1b07262edd97116218a755125))
* upgrade snyk from 1.399.1 to 1.400.0 ([1da4d48](https://github.com/randytarampi/pseudoimage/commit/1da4d481e672bbcf39226d00144efdc36e15cc93))

## [3.1.11](https://github.com/randytarampi/pseudoimage/compare/v3.1.10...v3.1.11) (2020-09-23)


### Bug Fixes

* upgrade snyk from 1.398.1 to 1.399.1 ([7f804a0](https://github.com/randytarampi/pseudoimage/commit/7f804a006834c1041691a5aca9274a6467e633cf))

## [3.1.10](https://github.com/randytarampi/pseudoimage/compare/v3.1.9...v3.1.10) (2020-09-22)


### Bug Fixes

* upgrade semantic-release from 17.1.1 to 17.1.2 ([1399ad1](https://github.com/randytarampi/pseudoimage/commit/1399ad1253f275aad41d072d52f8d740e02dd8b8))

## [3.1.9](https://github.com/randytarampi/pseudoimage/compare/v3.1.8...v3.1.9) (2020-09-18)


### Bug Fixes

* upgrade snyk from 1.395.0 to 1.398.1 ([519370f](https://github.com/randytarampi/pseudoimage/commit/519370f068be844af99b9c0650b10fe32959888f))

## [3.1.8](https://github.com/randytarampi/pseudoimage/compare/v3.1.7...v3.1.8) (2020-09-17)


### Bug Fixes

* upgrade snyk from 1.393.0 to 1.395.0 ([fb8ebae](https://github.com/randytarampi/pseudoimage/commit/fb8ebae35406eb1552f8f5b8dd6f0dc87988661f))

## [3.1.7](https://github.com/randytarampi/pseudoimage/compare/v3.1.6...v3.1.7) (2020-09-13)


### Bug Fixes

* upgrade snyk from 1.386.0 to 1.387.1 ([fd83ffb](https://github.com/randytarampi/pseudoimage/commit/fd83ffb2d53f218f5d97e771e4884a97c467a714))

## [3.1.6](https://github.com/randytarampi/pseudoimage/compare/v3.1.5...v3.1.6) (2020-08-29)


### Bug Fixes

* **package:** Bump packages for security updates (2020-08-29) ([4a7b43f](https://github.com/randytarampi/pseudoimage/commit/4a7b43fdbf3c7eb8a6ed3c1d6f6db7fe2cdd0d16)), closes [/github.com/randytarampi/slamscan/pull/131#issuecomment-669014514](https://github.com//github.com/randytarampi/slamscan/pull/131/issues/issuecomment-669014514) [/github.com/randytarampi/lwip/pull/47#issuecomment-669576137](https://github.com//github.com/randytarampi/lwip/pull/47/issues/issuecomment-669576137) [/github.com/randytarampi/lwip/pull/46#issuecomment-669587798](https://github.com//github.com/randytarampi/lwip/pull/46/issues/issuecomment-669587798) [/github.com/randytarampi/pseudolocalize/pull/43#issuecomment-669639431](https://github.com//github.com/randytarampi/pseudolocalize/pull/43/issues/issuecomment-669639431) [/github.com/randytarampi/pseudolocalize/pull/44#issuecomment-669640745](https://github.com//github.com/randytarampi/pseudolocalize/pull/44/issues/issuecomment-669640745) [/github.com/randytarampi/pseudoimage/pull/60#issuecomment-669730376](https://github.com//github.com/randytarampi/pseudoimage/pull/60/issues/issuecomment-669730376) [/github.com/randytarampi/slamscan/pull/132#issuecomment-669738806](https://github.com//github.com/randytarampi/slamscan/pull/132/issues/issuecomment-669738806) [/github.com/randytarampi/slamscan/pull/134#issuecomment-669738983](https://github.com//github.com/randytarampi/slamscan/pull/134/issues/issuecomment-669738983) [/github.com/randytarampi/slamscan/pull/133#issuecomment-669739016](https://github.com//github.com/randytarampi/slamscan/pull/133/issues/issuecomment-669739016) [/github.com/randytarampi/pseudoimage/pull/61#issuecomment-669743569](https://github.com//github.com/randytarampi/pseudoimage/pull/61/issues/issuecomment-669743569) [/github.com/randytarampi/slamscan/pull/135#issuecomment-671014646](https://github.com//github.com/randytarampi/slamscan/pull/135/issues/issuecomment-671014646) [/github.com/randytarampi/pseudolocalize/pull/45#issuecomment-673205158](https://github.com//github.com/randytarampi/pseudolocalize/pull/45/issues/issuecomment-673205158) [/github.com/randytarampi/pseudoimage/pull/62#issuecomment-673288919](https://github.com//github.com/randytarampi/pseudoimage/pull/62/issues/issuecomment-673288919) [/github.com/randytarampi/lwip/pull/48#issuecomment-674452146](https://github.com//github.com/randytarampi/lwip/pull/48/issues/issuecomment-674452146) [/github.com/randytarampi/me/pull/748#issuecomment-674633206](https://github.com//github.com/randytarampi/me/pull/748/issues/issuecomment-674633206)

## [3.1.5](https://github.com/randytarampi/pseudoimage/compare/v3.1.4...v3.1.5) (2020-05-04)


### Bug Fixes

* upgrade snyk from 1.316.1 to 1.316.2 ([c2c0377](https://github.com/randytarampi/pseudoimage/commit/c2c0377fc238571bccb7a1763a29e24cb6d27f06))
* upgrade snyk from 1.316.1 to 1.316.2 ([f57703b](https://github.com/randytarampi/pseudoimage/commit/f57703bee4e595d97388016077f2bb8957d922bb))

## [3.1.4](https://github.com/randytarampi/pseudoimage/compare/v3.1.3...v3.1.4) (2020-05-01)


### Bug Fixes

* upgrade [@randy](https://github.com/randy).tarampi/lwip from 1.1.0 to 1.3.1 ([fa62762](https://github.com/randytarampi/pseudoimage/commit/fa62762b1f378ae9a20433d50e3dd265a2beefe5))
* upgrade [@randy](https://github.com/randy).tarampi/lwip from 1.1.0 to 1.3.1 ([e7ca6c8](https://github.com/randytarampi/pseudoimage/commit/e7ca6c83340692c7d884abaef4499aa0f0b5fdbf))
* upgrade mocha from 7.1.1 to 7.1.2 ([20ad4e4](https://github.com/randytarampi/pseudoimage/commit/20ad4e4b4162748b875ebe0dba154797d540dd0e))
* upgrade mocha from 7.1.1 to 7.1.2 ([bc54be5](https://github.com/randytarampi/pseudoimage/commit/bc54be5bca5c5226c06ad0c82b2eda2fc6becea9))

## [3.1.3](https://github.com/randytarampi/pseudoimage/compare/v3.1.2...v3.1.3) (2020-04-30)


### Bug Fixes

* package.json, package-lock.json & .snyk to reduce vulnerabilities ([9966aed](https://github.com/randytarampi/pseudoimage/commit/9966aed617369fda5662b81e2944f636172cb044))
* package.json, package-lock.json & .snyk to reduce vulnerabilities ([1eaa1f5](https://github.com/randytarampi/pseudoimage/commit/1eaa1f5035e9443a5acb2fb9c765df8991614142))
* package.json, package-lock.json & .snyk to reduce vulnerabilities ([2ba06c6](https://github.com/randytarampi/pseudoimage/commit/2ba06c6bd97e96d74efd1ffa63eb53b7b6e5d530))
* upgrade @semantic-release/changelog from 5.0.0 to 5.0.1 ([0f808fe](https://github.com/randytarampi/pseudoimage/commit/0f808fee6fe8d11b44b6d4f730eb813204c5129f))
* upgrade @semantic-release/changelog from 5.0.0 to 5.0.1 ([7386193](https://github.com/randytarampi/pseudoimage/commit/73861931b5f6c74d4d514cf2b6f991313a81eddc))
* upgrade commander from 5.0.0 to 5.1.0 ([d73908a](https://github.com/randytarampi/pseudoimage/commit/d73908a8fe294d4506a507b8f51a97689d7c8b9e))
* upgrade commander from 5.0.0 to 5.1.0 ([ae017c7](https://github.com/randytarampi/pseudoimage/commit/ae017c7290fb05cf2c4f6a8c2fc8b03732ea3224))
* upgrade mocha from 7.1.1 to 7.1.2 ([4961370](https://github.com/randytarampi/pseudoimage/commit/4961370c57e4b86ab2b27198dfecb5e72a103e5b))
* upgrade mocha from 7.1.1 to 7.1.2 ([1a868c8](https://github.com/randytarampi/pseudoimage/commit/1a868c80f70c4c3c403a087660dbd0c651b3350b))
* upgrade nyc from 15.0.0 to 15.0.1 ([179c35c](https://github.com/randytarampi/pseudoimage/commit/179c35ce3d6c2326a276b4a2ad83166dc024488f))
* upgrade nyc from 15.0.0 to 15.0.1 ([b9ffb85](https://github.com/randytarampi/pseudoimage/commit/b9ffb851ee419b5aba4f5862aa9c51da330382ff))
* upgrade snyk from 1.311.0 to 1.313.1 ([cd87a1c](https://github.com/randytarampi/pseudoimage/commit/cd87a1cb6e35f348f0dbbab1d4f29a5110645bf9))
* upgrade snyk from 1.311.0 to 1.313.1 ([60f5498](https://github.com/randytarampi/pseudoimage/commit/60f5498e7eaef4d3a36cf7c5b1a3679e677b6831))

## [3.1.2](https://github.com/randytarampi/pseudoimage/compare/v3.1.1...v3.1.2) (2020-04-29)


### Bug Fixes

* package.json & package-lock.json to reduce vulnerabilities ([ccb9861](https://github.com/randytarampi/pseudoimage/commit/ccb98619e0d981788870e62ae86fe16392a3d91b))
* package.json & package-lock.json to reduce vulnerabilities ([720ec5d](https://github.com/randytarampi/pseudoimage/commit/720ec5d7125884bbb54e394a7ab47b23ba7a3282))
* upgrade coveralls from 3.0.9 to 3.1.0 ([0df417c](https://github.com/randytarampi/pseudoimage/commit/0df417cc3dc19e029787755dc9aef7f0bed87ffc))
* upgrade coveralls from 3.0.9 to 3.1.0 ([e0f62f4](https://github.com/randytarampi/pseudoimage/commit/e0f62f415bab3ff24a4f360d25bda31ae9bfd123))
* upgrade eslint-plugin-import from 2.19.1 to 2.20.2 ([92bfcae](https://github.com/randytarampi/pseudoimage/commit/92bfcaeb062b40f15e01ce72c01a3fa979235a15))
* upgrade eslint-plugin-import from 2.19.1 to 2.20.2 ([4fb5e26](https://github.com/randytarampi/pseudoimage/commit/4fb5e26c7196460aa18f82586913e41660037f6e))
* upgrade semantic-release from 17.0.0 to 17.0.7 ([75d718b](https://github.com/randytarampi/pseudoimage/commit/75d718b1b538b2a6d2035d07a659d3159d8423be))
* upgrade semantic-release from 17.0.0 to 17.0.7 ([f7f8cbb](https://github.com/randytarampi/pseudoimage/commit/f7f8cbba176a694eb1287faeaa2863f482319dee))
* upgrade snyk from 1.290.1 to 1.311.0 ([e04d0e4](https://github.com/randytarampi/pseudoimage/commit/e04d0e45ceee466e698cce7f2bacc7304bbece69))
* upgrade snyk from 1.290.1 to 1.311.0 ([ccffbf8](https://github.com/randytarampi/pseudoimage/commit/ccffbf89f6071dbb676cb4af6d779b312b080704))

## [3.1.1](https://github.com/randytarampi/pseudoimage/compare/v3.1.0...v3.1.1) (2020-02-16)


### Bug Fixes

* package.json & package-lock.json to reduce vulnerabilities ([d98d92f](https://github.com/randytarampi/pseudoimage/commit/d98d92fc49a4b0a3edc914a1baf6ec482a9deae6))

# [3.1.0](https://github.com/randytarampi/pseudoimage/compare/v3.0.2...v3.1.0) (2020-01-06)


### Features

* **package:** Blindly upgrade our dependencies for the new year and support node@10, node@12 and beyond. ([27f3fe5](https://github.com/randytarampi/pseudoimage/commit/27f3fe5214a8c525642b0a587c89cc860bd87964))

## [3.0.2](https://github.com/randytarampi/pseudoimage/compare/v3.0.1...v3.0.2) (2019-07-05)


### Bug Fixes

* .snyk, package.json & package-lock.json to reduce vulnerabilities ([ae72334](https://github.com/randytarampi/pseudoimage/commit/ae72334))
* .snyk, package.json & package-lock.json to reduce vulnerabilities ([173b719](https://github.com/randytarampi/pseudoimage/commit/173b719))
* Apply Synk patch for SNYK-JS-LODASH-450202. ([527cc47](https://github.com/randytarampi/pseudoimage/commit/527cc47))
* Apply Synk patch for SNYK-JS-LODASH-450202. ([64174a9](https://github.com/randytarampi/pseudoimage/commit/64174a9))

## [3.0.1](https://github.com/randytarampi/pseudoimage/compare/v3.0.0...v3.0.1) (2019-03-10)


### Bug Fixes

* **build:** Fix installation on Windows boxes with node@6. ([#9](https://github.com/randytarampi/pseudoimage/issues/9)) ([68a4e93](https://github.com/randytarampi/pseudoimage/commit/68a4e93))

# [3.0.0](https://github.com/randytarampi/pseudoimage/compare/v2.12.5...v3.0.0) (2019-03-08)


### Bug Fixes

* **semantic-release:** Fix invalid `.releaserc` yaml. ([51126d8](https://github.com/randytarampi/pseudoimage/commit/51126d8))
* **semantic-release:** Fix the `.releaserc` yaml. ([3b4ff1a](https://github.com/randytarampi/pseudoimage/commit/3b4ff1a))
* **semantic-release:** Use `@semantic-release/git` properly ([1929ab1](https://github.com/randytarampi/pseudoimage/commit/1929ab1))


### Performance Improvements

* **package:** @mcph/lwip -> [@randy](https://github.com/randy).tarampi/lwip. ([1cdc517](https://github.com/randytarampi/pseudoimage/commit/1cdc517))


### BREAKING CHANGES

* **package:** Consumers of this package on platforms that aren't Windows will need to bring their own `libgif`, `libjpeg` and `libpng`.

# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.12.4](https://github.com/randytarampi/me/compare/v2.12.3...v2.12.4) (2018-12-29)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [2.12.3](https://github.com/randytarampi/me/compare/v2.12.2...v2.12.3) (2018-12-27)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [2.12.2](https://github.com/randytarampi/me/compare/v2.12.1...v2.12.2) (2018-12-27)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [2.12.1](https://github.com/randytarampi/me/compare/v2.12.0...v2.12.1) (2018-12-26)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





# [2.12.0](https://github.com/randytarampi/me/compare/v2.11.5...v2.12.0) (2018-12-24)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [2.11.5](https://github.com/randytarampi/me/compare/v2.11.4...v2.11.5) (2018-12-22)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [2.11.4](https://github.com/randytarampi/me/compare/v2.11.3...v2.11.4) (2018-12-16)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [2.11.3](https://github.com/randytarampi/me/compare/v2.11.2...v2.11.3) (2018-12-16)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [2.11.2](https://github.com/randytarampi/me/compare/v2.11.1...v2.11.2) (2018-12-15)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [2.11.1](https://github.com/randytarampi/me/compare/v2.11.0...v2.11.1) (2018-12-15)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





# [2.11.0](https://github.com/randytarampi/me/compare/v2.10.6...v2.11.0) (2018-12-14)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [2.10.6](https://github.com/randytarampi/me/compare/v2.10.5...v2.10.6) (2018-12-13)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [2.10.5](https://github.com/randytarampi/me/compare/v2.10.4...v2.10.5) (2018-12-13)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [2.10.4](https://github.com/randytarampi/me/compare/v2.10.3...v2.10.4) (2018-12-13)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [2.10.3](https://github.com/randytarampi/me/compare/v2.10.2...v2.10.3) (2018-12-13)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [2.10.2](https://github.com/randytarampi/me/compare/v2.10.1...v2.10.2) (2018-12-12)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [2.10.1](https://github.com/randytarampi/me/compare/v2.10.0...v2.10.1) (2018-12-12)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





# [2.10.0](https://github.com/randytarampi/me/compare/v2.8.1...v2.10.0) (2018-12-12)


### Features

* **www:** Start tree shaking. ([0ebf7f6](https://github.com/randytarampi/me/commit/0ebf7f6))





# [2.9.0](https://github.com/randytarampi/me/compare/v2.8.1...v2.9.0) (2018-12-12)


### Features

* **www:** Start tree shaking. ([0ebf7f6](https://github.com/randytarampi/me/commit/0ebf7f6))





## [2.8.1](https://github.com/randytarampi/me/compare/v2.8.0...v2.8.1) (2018-12-11)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





# [2.8.0](https://github.com/randytarampi/me/compare/v2.7.0...v2.8.0) (2018-12-11)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





# [2.7.0](https://github.com/randytarampi/me/compare/v2.6.0...v2.7.0) (2018-12-11)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





# [2.6.0](https://github.com/randytarampi/me/compare/v2.4.6...v2.6.0) (2018-12-10)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





# [2.5.0](https://github.com/randytarampi/me/compare/v2.4.6...v2.5.0) (2018-12-10)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [2.4.6](https://github.com/randytarampi/me/compare/v2.4.5...v2.4.6) (2018-12-09)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [2.4.5](https://github.com/randytarampi/me/compare/v2.4.4...v2.4.5) (2018-12-09)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [2.4.4](https://github.com/randytarampi/me/compare/v2.4.3...v2.4.4) (2018-12-09)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [2.4.3](https://github.com/randytarampi/me/compare/v2.4.2...v2.4.3) (2018-12-09)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [2.4.2](https://github.com/randytarampi/me/compare/v2.4.1...v2.4.2) (2018-12-09)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [2.4.1](https://github.com/randytarampi/me/compare/v2.4.0...v2.4.1) (2018-12-08)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





# [2.4.0](https://github.com/randytarampi/me/compare/v2.3.0...v2.4.0) (2018-12-08)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





# [2.3.0](https://github.com/randytarampi/me/compare/v2.2.3...v2.3.0) (2018-12-06)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [2.2.3](https://github.com/randytarampi/me/compare/v2.2.2...v2.2.3) (2018-12-02)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [2.2.2](https://github.com/randytarampi/me/compare/v2.2.1...v2.2.2) (2018-11-28)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [2.2.1](https://github.com/randytarampi/me/compare/v2.2.0...v2.2.1) (2018-11-28)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





# [2.2.0](https://github.com/randytarampi/me/compare/v2.1.4...v2.2.0) (2018-11-27)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [2.1.4](https://github.com/randytarampi/me/compare/v2.1.3...v2.1.4) (2018-11-27)


### Performance Improvements

* **travis:** I can't tell if randytarampi/lwip#me-release-2018-11-26 is slow, or if it's just travis, but let's find out. ([1c088dc](https://github.com/randytarampi/me/commit/1c088dc)), closes [randytarampi/lwip#me-release-2018-11-26](https://github.com/randytarampi/lwip/issues/me-release-2018-11-26)





## [2.1.3](https://github.com/randytarampi/me/compare/v2.1.2...v2.1.3) (2018-11-26)


### Performance Improvements

* **travis:** Use [my `lwip` branch](https://github.com/randytarampi/lwip/tree/me-release). ([99cb6d1](https://github.com/randytarampi/me/commit/99cb6d1)), closes [mixer/lwip#v1](https://github.com/mixer/lwip/issues/v1) [randytarampi/lwip#3d6e73b3da32c40e2d971630e460a22053a82228](https://github.com/randytarampi/lwip/issues/3d6e73b3da32c40e2d971630e460a22053a82228) [randytarampi/lwip#e8763cad70f66874ff7cda1a592217b1ba6bf7f1](https://github.com/randytarampi/lwip/issues/e8763cad70f66874ff7cda1a592217b1ba6bf7f1)





## [2.1.2](https://github.com/randytarampi/me/compare/v2.1.1...v2.1.2) (2018-11-26)


### Reverts

* revert: chore(build): `lwip` -> `[@mcph](https://github.com/mcph)/lwip`. ([02fd8d0](https://github.com/randytarampi/me/commit/02fd8d0)), closes [#173](https://github.com/randytarampi/me/issues/173)





## [2.1.1](https://github.com/randytarampi/me/compare/v2.1.0...v2.1.1) (2018-11-25)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





# [2.1.0](https://github.com/randytarampi/me/compare/v2.0.7...v2.1.0) (2018-11-25)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [2.0.7](https://github.com/randytarampi/me/compare/v2.0.6...v2.0.7) (2018-11-25)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [2.0.6](https://github.com/randytarampi/me/compare/v2.0.5...v2.0.6) (2018-11-24)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [2.0.5](https://github.com/randytarampi/me/compare/v2.0.4...v2.0.5) (2018-11-23)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [2.0.4](https://github.com/randytarampi/me/compare/v2.0.3...v2.0.4) (2018-11-22)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [2.0.3](https://github.com/randytarampi/me/compare/v2.0.2...v2.0.3) (2018-11-22)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [2.0.2](https://github.com/randytarampi/me/compare/v2.0.1...v2.0.2) (2018-11-20)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [2.0.1](https://github.com/randytarampi/me/compare/v2.0.0...v2.0.1) (2018-11-20)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





# [2.0.0](https://github.com/randytarampi/me/compare/v1.7.2...v2.0.0) (2018-11-20)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [1.7.2](https://github.com/randytarampi/me/compare/v1.7.1...v1.7.2) (2018-11-19)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [1.7.1](https://github.com/randytarampi/me/compare/v1.7.0...v1.7.1) (2018-11-17)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





# [1.7.0](https://github.com/randytarampi/me/compare/v1.6.3...v1.7.0) (2018-11-17)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [1.6.3](https://github.com/randytarampi/me/compare/v1.6.2...v1.6.3) (2018-11-16)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [1.6.2](https://github.com/randytarampi/me/compare/v1.6.1...v1.6.2) (2018-11-16)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [1.6.1](https://github.com/randytarampi/me/compare/v1.6.0...v1.6.1) (2018-11-16)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





# [1.6.0](https://github.com/randytarampi/me/compare/v1.5.3...v1.6.0) (2018-11-16)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [1.5.3](https://github.com/randytarampi/me/compare/v1.5.2...v1.5.3) (2018-11-15)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [1.5.2](https://github.com/randytarampi/me/compare/v1.5.1...v1.5.2) (2018-11-15)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [1.5.1](https://github.com/randytarampi/me/compare/v1.5.0...v1.5.1) (2018-11-14)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





# [1.5.0](https://github.com/randytarampi/me/compare/v1.4.0...v1.5.0) (2018-11-14)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





# [1.4.0](https://github.com/randytarampi/me/compare/v1.3.9...v1.4.0) (2018-11-14)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [1.3.9](https://github.com/randytarampi/me/compare/v1.3.8...v1.3.9) (2018-11-10)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [1.3.8](https://github.com/randytarampi/me/compare/v1.3.7...v1.3.8) (2018-11-10)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [1.3.7](https://github.com/randytarampi/me/compare/v1.3.6...v1.3.7) (2018-11-08)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [1.3.6](https://github.com/randytarampi/me/compare/v1.3.5...v1.3.6) (2018-11-07)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [1.3.5](https://github.com/randytarampi/me/compare/v1.3.4...v1.3.5) (2018-11-07)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [1.3.4](https://github.com/randytarampi/me/compare/v1.3.3...v1.3.4) (2018-11-07)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [1.3.3](https://github.com/randytarampi/me/compare/v1.3.2...v1.3.3) (2018-11-07)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [1.3.2](https://github.com/randytarampi/me/compare/v1.3.1...v1.3.2) (2018-11-06)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [1.3.1](https://github.com/randytarampi/me/compare/v1.3.0...v1.3.1) (2018-11-06)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





# [1.3.0](https://github.com/randytarampi/me/compare/v1.2.5...v1.3.0) (2018-11-06)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [1.2.5](https://github.com/randytarampi/me/compare/v1.2.4...v1.2.5) (2018-11-06)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [1.2.4](https://github.com/randytarampi/me/compare/v1.2.3...v1.2.4) (2018-11-05)


### Bug Fixes

* **package:** `lib` now lives in `src/lib`. ([84cced2](https://github.com/randytarampi/me/commit/84cced2))





## [1.2.3](https://github.com/randytarampi/me/compare/v1.2.2...v1.2.3) (2018-11-05)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [1.2.2](https://github.com/randytarampi/me/compare/v1.2.1...v1.2.2) (2018-11-05)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [1.2.1](https://github.com/randytarampi/me/compare/v1.2.0...v1.2.1) (2018-11-05)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





# [1.2.0](https://github.com/randytarampi/me/compare/v1.1.8...v1.2.0) (2018-11-04)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [1.1.8](https://github.com/randytarampi/me/compare/v1.1.7...v1.1.8) (2018-11-04)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [1.1.7](https://github.com/randytarampi/me/compare/v1.1.6...v1.1.7) (2018-11-04)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [1.1.6](https://github.com/randytarampi/me/compare/v1.1.5...v1.1.6) (2018-11-04)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [1.1.5](https://github.com/randytarampi/me/compare/v1.1.4...v1.1.5) (2018-11-03)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [1.1.4](https://github.com/randytarampi/me/compare/v1.1.3...v1.1.4) (2018-11-03)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [1.1.3](https://github.com/randytarampi/me/compare/v1.1.2...v1.1.3) (2018-11-02)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [1.1.2](https://github.com/randytarampi/me/compare/v1.1.1...v1.1.2) (2018-11-02)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [1.1.1](https://github.com/randytarampi/me/compare/v1.1.0...v1.1.1) (2018-11-02)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





# [1.1.0](https://github.com/randytarampi/me/compare/v1.0.2...v1.1.0) (2018-11-01)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [1.0.2](https://github.com/randytarampi/me/compare/v1.0.0...v1.0.2) (2018-11-01)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [1.0.1](https://github.com/randytarampi/me/compare/v1.0.0...v1.0.1) (2018-11-01)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





# [1.0.0](https://github.com/randytarampi/me/compare/v0.48.0...v1.0.0) (2018-10-31)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





# [0.48.0](https://github.com/randytarampi/me/compare/v0.47.22...v0.48.0) (2018-10-31)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.47.22](https://github.com/randytarampi/me/compare/v0.47.21...v0.47.22) (2018-10-31)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.47.21](https://github.com/randytarampi/me/compare/v0.47.20...v0.47.21) (2018-10-31)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.47.20](https://github.com/randytarampi/me/compare/v0.47.19...v0.47.20) (2018-10-31)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.47.19](https://github.com/randytarampi/me/compare/v0.47.18...v0.47.19) (2018-10-31)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.47.18](https://github.com/randytarampi/me/compare/v0.47.17...v0.47.18) (2018-10-31)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.47.17](https://github.com/randytarampi/me/compare/v0.47.16...v0.47.17) (2018-10-31)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.47.16](https://github.com/randytarampi/me/compare/v0.47.15...v0.47.16) (2018-10-30)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.47.15](https://github.com/randytarampi/me/compare/v0.47.14...v0.47.15) (2018-10-30)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.47.14](https://github.com/randytarampi/me/compare/v0.47.13...v0.47.14) (2018-10-30)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.47.13](https://github.com/randytarampi/me/compare/v0.47.12...v0.47.13) (2018-10-30)


### Bug Fixes

* Remove `package-lock`s. ([b2bf2db](https://github.com/randytarampi/me/commit/b2bf2db))





## [0.47.12](https://github.com/randytarampi/me/compare/v0.47.11...v0.47.12) (2018-10-30)

**Note:** Version bump only for package @randy.tarampi/pseudoimage







**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.47.10](https://github.com/randytarampi/me/compare/v0.47.9...v0.47.10) (2018-10-29)


### Bug Fixes

* **package:** Just nuke all these `package-lock`s for now. ([a6c7d72](https://github.com/randytarampi/me/commit/a6c7d72))





## [0.47.9](https://github.com/randytarampi/me/compare/v0.47.8...v0.47.9) (2018-10-29)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.47.8](https://github.com/randytarampi/me/compare/v0.47.7...v0.47.8) (2018-10-29)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.47.7](https://github.com/randytarampi/me/compare/v0.47.6...v0.47.7) (2018-10-29)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.47.6](https://github.com/randytarampi/me/compare/v0.47.5...v0.47.6) (2018-10-29)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.47.5](https://github.com/randytarampi/me/compare/v0.47.4...v0.47.5) (2018-10-29)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.47.4](https://github.com/randytarampi/me/compare/v0.47.3...v0.47.4) (2018-10-29)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.47.3](https://github.com/randytarampi/me/compare/v0.47.2...v0.47.3) (2018-10-28)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.47.2](https://github.com/randytarampi/me/compare/v0.47.1...v0.47.2) (2018-10-28)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.47.1](https://github.com/randytarampi/me/compare/v0.47.0...v0.47.1) (2018-10-28)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





# [0.47.0](https://github.com/randytarampi/me/compare/v0.46.1...v0.47.0) (2018-10-28)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.46.1](https://github.com/randytarampi/me/compare/v0.46.0...v0.46.1) (2018-10-26)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





# [0.46.0](https://github.com/randytarampi/me/compare/v0.45.8...v0.46.0) (2018-10-26)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.45.8](https://github.com/randytarampi/me/compare/v0.45.7...v0.45.8) (2018-10-24)


### Reverts

* chore(build): `lwip` -> `[@mcph](https://github.com/mcph)/lwip`. ([beb251c](https://github.com/randytarampi/me/commit/beb251c))





## [0.45.7](https://github.com/randytarampi/me/compare/v0.45.6...v0.45.7) (2018-10-22)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.45.6](https://github.com/randytarampi/me/compare/v0.45.5...v0.45.6) (2018-10-21)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.45.5](https://github.com/randytarampi/me/compare/v0.45.4...v0.45.5) (2018-10-21)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.45.4](https://github.com/randytarampi/me/compare/v0.45.3...v0.45.4) (2018-10-20)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.45.3](https://github.com/randytarampi/me/compare/v0.45.2...v0.45.3) (2018-10-20)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.45.2](https://github.com/randytarampi/me/compare/v0.45.1...v0.45.2) (2018-10-20)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.45.1](https://github.com/randytarampi/me/compare/v0.45.0...v0.45.1) (2018-10-20)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





# [0.45.0](https://github.com/randytarampi/me/compare/v0.44.0...v0.45.0) (2018-10-20)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





# [0.44.0](https://github.com/randytarampi/me/compare/v0.43.13...v0.44.0) (2018-10-19)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.43.13](https://github.com/randytarampi/me/compare/v0.43.12...v0.43.13) (2018-10-18)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.43.12](https://github.com/randytarampi/me/compare/v0.43.11...v0.43.12) (2018-10-18)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.43.11](https://github.com/randytarampi/me/compare/v0.43.10...v0.43.11) (2018-10-18)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.43.10](https://github.com/randytarampi/me/compare/v0.43.9...v0.43.10) (2018-10-18)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.43.9](https://github.com/randytarampi/me/compare/v0.43.8...v0.43.9) (2018-10-17)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.43.8](https://github.com/randytarampi/me/compare/v0.43.7...v0.43.8) (2018-10-17)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.43.7](https://github.com/randytarampi/me/compare/v0.43.6...v0.43.7) (2018-10-17)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.43.6](https://github.com/randytarampi/me/compare/v0.43.5...v0.43.6) (2018-10-17)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.43.5](https://github.com/randytarampi/me/compare/v0.43.4...v0.43.5) (2018-10-17)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.43.4](https://github.com/randytarampi/me/compare/v0.43.3...v0.43.4) (2018-10-17)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.43.3](https://github.com/randytarampi/me/compare/v0.43.2...v0.43.3) (2018-10-17)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.43.2](https://github.com/randytarampi/me/compare/v0.43.1...v0.43.2) (2018-10-16)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.43.1](https://github.com/randytarampi/me/compare/v0.43.0...v0.43.1) (2018-10-16)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





# [0.43.0](https://github.com/randytarampi/me/compare/v0.42.2...v0.43.0) (2018-10-16)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.42.2](https://github.com/randytarampi/me/compare/v0.42.1...v0.42.2) (2018-10-16)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.42.1](https://github.com/randytarampi/me/compare/v0.42.0...v0.42.1) (2018-10-16)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





# [0.42.0](https://github.com/randytarampi/me/compare/v0.41.7...v0.42.0) (2018-10-15)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.41.7](https://github.com/randytarampi/me/compare/v0.41.6...v0.41.7) (2018-10-15)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.41.6](https://github.com/randytarampi/me/compare/v0.41.5...v0.41.6) (2018-10-15)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.41.5](https://github.com/randytarampi/me/compare/v0.41.4...v0.41.5) (2018-10-15)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.41.4](https://github.com/randytarampi/me/compare/v0.41.3...v0.41.4) (2018-10-15)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.41.3](https://github.com/randytarampi/me/compare/v0.41.2...v0.41.3) (2018-10-15)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.41.2](https://github.com/randytarampi/me/compare/v0.41.1...v0.41.2) (2018-10-14)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.41.1](https://github.com/randytarampi/me/compare/v0.41.0...v0.41.1) (2018-10-13)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





# [0.41.0](https://github.com/randytarampi/me/compare/v0.40.19...v0.41.0) (2018-10-13)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.40.19](https://github.com/randytarampi/me/compare/v0.40.18...v0.40.19) (2018-10-10)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.40.18](https://github.com/randytarampi/me/compare/v0.40.17...v0.40.18) (2018-10-10)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.40.17](https://github.com/randytarampi/me/compare/v0.40.16...v0.40.17) (2018-10-10)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.40.16](https://github.com/randytarampi/me/compare/v0.40.15...v0.40.16) (2018-10-09)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.40.15](https://github.com/randytarampi/me/compare/v0.40.14...v0.40.15) (2018-10-05)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





## [0.40.14](https://github.com/randytarampi/me/compare/v0.40.13...v0.40.14) (2018-10-04)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.40.13"></a>
## [0.40.13](https://github.com/randytarampi/me/compare/v0.40.12...v0.40.13) (2018-09-30)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.40.12"></a>
## [0.40.12](https://github.com/randytarampi/me/compare/v0.40.11...v0.40.12) (2018-09-30)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.40.11"></a>
## [0.40.11](https://github.com/randytarampi/me/compare/v0.40.10...v0.40.11) (2018-09-27)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.40.10"></a>
## [0.40.10](https://github.com/randytarampi/me/compare/v0.40.9...v0.40.10) (2018-09-26)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.40.9"></a>
## [0.40.9](https://github.com/randytarampi/me/compare/v0.40.8...v0.40.9) (2018-09-26)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.40.8"></a>
## [0.40.8](https://github.com/randytarampi/me/compare/v0.40.7...v0.40.8) (2018-09-26)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.40.7"></a>
## [0.40.7](https://github.com/randytarampi/me/compare/v0.40.6...v0.40.7) (2018-09-26)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.40.6"></a>
## [0.40.6](https://github.com/randytarampi/me/compare/v0.40.5...v0.40.6) (2018-09-26)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.40.5"></a>
## [0.40.5](https://github.com/randytarampi/me/compare/v0.40.4...v0.40.5) (2018-09-25)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.40.4"></a>
## [0.40.4](https://github.com/randytarampi/me/compare/v0.40.3...v0.40.4) (2018-09-25)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.40.3"></a>
## [0.40.3](https://github.com/randytarampi/me/compare/v0.40.2...v0.40.3) (2018-09-24)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.40.2"></a>
## [0.40.2](https://github.com/randytarampi/me/compare/v0.40.1...v0.40.2) (2018-09-24)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.40.1"></a>
## [0.40.1](https://github.com/randytarampi/me/compare/v0.40.0...v0.40.1) (2018-09-24)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.40.0"></a>
# [0.40.0](https://github.com/randytarampi/me/compare/v0.39.13...v0.40.0) (2018-09-24)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.39.13"></a>
## [0.39.13](https://github.com/randytarampi/me/compare/v0.39.12...v0.39.13) (2018-09-24)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.39.12"></a>
## [0.39.12](https://github.com/randytarampi/me/compare/v0.39.11...v0.39.12) (2018-09-24)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.39.11"></a>
## [0.39.11](https://github.com/randytarampi/me/compare/v0.39.10...v0.39.11) (2018-09-23)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.39.10"></a>
## [0.39.10](https://github.com/randytarampi/me/compare/v0.39.9...v0.39.10) (2018-09-23)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.39.9"></a>
## [0.39.9](https://github.com/randytarampi/me/compare/v0.39.8...v0.39.9) (2018-09-23)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.39.8"></a>
## [0.39.8](https://github.com/randytarampi/me/compare/v0.39.7...v0.39.8) (2018-09-23)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.39.7"></a>
## [0.39.7](https://github.com/randytarampi/me/compare/v0.39.6...v0.39.7) (2018-09-23)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.39.6"></a>
## [0.39.6](https://github.com/randytarampi/me/compare/v0.39.5...v0.39.6) (2018-09-23)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.39.5"></a>
## [0.39.5](https://github.com/randytarampi/me/compare/v0.39.4...v0.39.5) (2018-09-22)


### Bug Fixes

* **docs:** Better namespace the `ga-beacon` path. ([803878a](https://github.com/randytarampi/me/commit/803878a))





<a name="0.39.4"></a>
## [0.39.4](https://github.com/randytarampi/me/compare/v0.39.3...v0.39.4) (2018-09-22)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.39.3"></a>
## [0.39.3](https://github.com/randytarampi/me/compare/v0.39.2...v0.39.3) (2018-09-22)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.39.2"></a>
## [0.39.2](https://github.com/randytarampi/me/compare/v0.39.1...v0.39.2) (2018-09-22)


### Bug Fixes

* **docs:** `https://nodei.co/npm` -> `https://nodeico.herokuapp.com`. ([25a8929](https://github.com/randytarampi/me/commit/25a8929))





<a name="0.39.1"></a>
## [0.39.1](https://github.com/randytarampi/me/compare/v0.39.0...v0.39.1) (2018-09-22)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.39.0"></a>
# [0.39.0](https://github.com/randytarampi/me/compare/v0.35.0...v0.39.0) (2018-09-22)


### Features

* **resume:** Make `resume` publishable per [#67](https://github.com/randytarampi/me/issues/67). ([7686d58](https://github.com/randytarampi/me/commit/7686d58))





<a name="0.38.0"></a>
# [0.38.0](https://github.com/randytarampi/me/compare/v0.35.0...v0.38.0) (2018-09-22)


### Features

* **resume:** Make `resume` publishable per [#67](https://github.com/randytarampi/me/issues/67). ([7686d58](https://github.com/randytarampi/me/commit/7686d58))





<a name="0.37.0"></a>
# [0.37.0](https://github.com/randytarampi/me/compare/v0.35.0...v0.37.0) (2018-09-22)


### Features

* **resume:** Make `resume` publishable per [#67](https://github.com/randytarampi/me/issues/67). ([7686d58](https://github.com/randytarampi/me/commit/7686d58))





<a name="0.36.0"></a>
# [0.36.0](https://github.com/randytarampi/me/compare/v0.35.0...v0.36.0) (2018-09-21)


### Features

* **resume:** Make `resume` publishable per [#67](https://github.com/randytarampi/me/issues/67). ([7686d58](https://github.com/randytarampi/me/commit/7686d58))





<a name="0.35.0"></a>
# [0.35.0](https://github.com/randytarampi/me/compare/v0.34.3...v0.35.0) (2018-09-20)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.34.3"></a>
## [0.34.3](https://github.com/randytarampi/me/compare/v0.34.1...v0.34.3) (2018-09-20)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.34.2"></a>
## [0.34.2](https://github.com/randytarampi/me/compare/v0.34.1...v0.34.2) (2018-09-20)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.34.1"></a>
## [0.34.1](https://github.com/randytarampi/me/compare/v0.34.0...v0.34.1) (2018-09-19)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.34.0"></a>
# [0.34.0](https://github.com/randytarampi/me/compare/v0.33.2...v0.34.0) (2018-09-18)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.33.2"></a>
## [0.33.2](https://github.com/randytarampi/me/compare/v0.33.1...v0.33.2) (2018-09-18)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.33.1"></a>
## [0.33.1](https://github.com/randytarampi/me/compare/v0.33.0...v0.33.1) (2018-09-18)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.33.0"></a>
# [0.33.0](https://github.com/randytarampi/me/compare/v0.32.1...v0.33.0) (2018-09-18)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.32.1"></a>
## [0.32.1](https://github.com/randytarampi/me/compare/v0.32.0...v0.32.1) (2018-09-17)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.32.0"></a>
# [0.32.0](https://github.com/randytarampi/me/compare/v0.31.7...v0.32.0) (2018-09-17)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.31.7"></a>
## [0.31.7](https://github.com/randytarampi/me/compare/v0.31.6...v0.31.7) (2018-09-16)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.31.6"></a>
## [0.31.6](https://github.com/randytarampi/me/compare/v0.31.5...v0.31.6) (2018-09-16)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.31.5"></a>
## [0.31.5](https://github.com/randytarampi/me/compare/v0.31.4...v0.31.5) (2018-09-16)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.31.4"></a>
## [0.31.4](https://github.com/randytarampi/me/compare/v0.31.3...v0.31.4) (2018-09-16)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.31.3"></a>
## [0.31.3](https://github.com/randytarampi/me/compare/v0.31.2...v0.31.3) (2018-09-15)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.31.2"></a>
## [0.31.2](https://github.com/randytarampi/me/compare/v0.31.1...v0.31.2) (2018-09-15)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.31.1"></a>
## [0.31.1](https://github.com/randytarampi/me/compare/v0.31.0...v0.31.1) (2018-09-15)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.30.0"></a>
# [0.30.0](https://github.com/randytarampi/me/compare/v0.29.1...v0.30.0) (2018-09-15)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.29.1"></a>
## [0.29.1](https://github.com/randytarampi/me/compare/v0.29.0...v0.29.1) (2018-09-14)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.29.0"></a>
# [0.29.0](https://github.com/randytarampi/me/compare/v0.28.0...v0.29.0) (2018-09-14)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.28.0"></a>
# [0.28.0](https://github.com/randytarampi/me/compare/v0.27.1...v0.28.0) (2018-09-13)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.27.1"></a>
## [0.27.1](https://github.com/randytarampi/me/compare/v0.27.0...v0.27.1) (2018-09-13)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.27.0"></a>
# [0.27.0](https://github.com/randytarampi/me/compare/v0.26.1...v0.27.0) (2018-09-13)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.26.1"></a>
## [0.26.1](https://github.com/randytarampi/me/compare/v0.26.0...v0.26.1) (2018-09-12)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.26.0"></a>
# [0.26.0](https://github.com/randytarampi/me/compare/v0.25.4...v0.26.0) (2018-09-12)


### Bug Fixes

* **pseudoimage:** `main` should refer to the correct file. ([1c3b3da](https://github.com/randytarampi/me/commit/1c3b3da))





<a name="0.25.4"></a>
## [0.25.4](https://github.com/randytarampi/me/compare/v0.25.3...v0.25.4) (2018-09-12)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.25.3"></a>
## [0.25.3](https://github.com/randytarampi/me/compare/v0.25.2...v0.25.3) (2018-09-11)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.25.2"></a>
## [0.25.2](https://github.com/randytarampi/me/compare/v0.25.1...v0.25.2) (2018-09-11)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.25.1"></a>
## [0.25.1](https://github.com/randytarampi/me/compare/v0.25.0...v0.25.1) (2018-09-11)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.25.0"></a>
# [0.25.0](https://github.com/randytarampi/me/compare/v0.24.7...v0.25.0) (2018-09-11)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.24.0"></a>
# [0.24.0](https://github.com/randytarampi/me/compare/v0.23.12...v0.24.0) (2018-09-06)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.23.0"></a>
# [0.23.0](https://github.com/randytarampi/me/compare/v0.22.9...v0.23.0) (2018-09-02)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.22.9"></a>
## [0.22.9](https://github.com/randytarampi/me/compare/v0.22.8...v0.22.9) (2018-09-01)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.22.5"></a>
## [0.22.5](https://github.com/randytarampi/me/compare/v0.22.4...v0.22.5) (2018-09-01)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.22.0"></a>
# [0.22.0](https://github.com/randytarampi/me/compare/v0.21.0...v0.22.0) (2018-08-31)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.21.0"></a>
# [0.21.0](https://github.com/randytarampi/me/compare/v0.20.6...v0.21.0) (2018-08-31)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.20.0"></a>
# [0.20.0](https://github.com/randytarampi/me/compare/v0.19.6...v0.20.0) (2018-08-28)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.19.1"></a>
## [0.19.1](https://github.com/randytarampi/me/compare/v0.19.0...v0.19.1) (2018-08-27)


### Bug Fixes

* **pseudoimage:** ESLint. ([4f6892b](https://github.com/randytarampi/me/commit/4f6892b))
* **pseudoimage:** Fix broken `p7eImage` and `p7eImages` bin scripts. ([2957d75](https://github.com/randytarampi/me/commit/2957d75)), closes [#12](https://github.com/randytarampi/me/issues/12)





<a name="0.19.0"></a>
# [0.19.0](https://github.com/randytarampi/me/compare/v0.18.4...v0.19.0) (2018-08-27)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.18.1"></a>
## [0.18.1](https://github.com/randytarampi/me/compare/v0.18.0...v0.18.1) (2018-08-24)


### Bug Fixes

* User facing URLs should be `https`, and rooted at `www.randytarampi.ca`. ([f3ee4ea](https://github.com/randytarampi/me/commit/f3ee4ea))





<a name="0.18.0"></a>
# [0.18.0](https://github.com/randytarampi/me/compare/v0.17.1...v0.18.0) (2018-08-24)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.17.0"></a>
# [0.17.0](https://github.com/randytarampi/me/compare/v0.16.5...v0.17.0) (2018-08-23)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.16.0"></a>
# [0.16.0](https://github.com/randytarampi/me/compare/v0.15.0...v0.16.0) (2018-08-20)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.15.0"></a>
# [0.15.0](https://github.com/randytarampi/me/compare/v0.14.3...v0.15.0) (2018-08-19)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.14.0"></a>
# [0.14.0](https://github.com/randytarampi/me/compare/v0.13.1...v0.14.0) (2018-08-18)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.13.0"></a>
# [0.13.0](https://github.com/randytarampi/me/compare/v0.12.1...v0.13.0) (2018-08-17)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.12.0"></a>
# [0.12.0](https://github.com/randytarampi/me/compare/v0.11.3...v0.12.0) (2018-08-17)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.11.0"></a>
# [0.11.0](https://github.com/randytarampi/me/compare/v0.10.9...v0.11.0) (2018-08-14)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.10.0"></a>
# [0.10.0](https://github.com/randytarampi/me/compare/v0.9.1...v0.10.0) (2018-08-10)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.9.0"></a>
# [0.9.0](https://github.com/randytarampi/me/compare/v0.8.2...v0.9.0) (2018-08-10)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.8.0"></a>
# [0.8.0](https://github.com/randytarampi/me/compare/v0.7.0...v0.8.0) (2018-08-08)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.7.0"></a>
# [0.7.0](https://github.com/randytarampi/me/compare/v0.6.8...v0.7.0) (2018-08-08)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.6.0"></a>
# [0.6.0](https://github.com/randytarampi/me/compare/v0.5.1...v0.6.0) (2018-08-03)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.5.0"></a>
# [0.5.0](https://github.com/randytarampi/me/compare/v0.4.0...v0.5.0) (2018-08-03)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.4.0"></a>
# [0.4.0](https://github.com/randytarampi/me/compare/v0.3.2...v0.4.0) (2018-08-03)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.3.0"></a>
# [0.3.0](https://github.com/randytarampi/me/compare/v0.2.0...v0.3.0) (2018-08-01)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.2.0"></a>
# [0.2.0](https://github.com/randytarampi/me/compare/v0.1.11...v0.2.0) (2018-07-30)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.1.8"></a>
## [0.1.8](https://github.com/randytarampi/me/compare/v0.1.7...v0.1.8) (2018-07-28)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.1.7"></a>
## [0.1.7](https://github.com/randytarampi/me/compare/v0.1.6...v0.1.7) (2018-07-28)


### Bug Fixes

* ESLint. ([c123802](https://github.com/randytarampi/me/commit/c123802))





<a name="0.1.5"></a>
## [0.1.5](https://github.com/randytarampi/me/compare/v0.1.4...v0.1.5) (2018-07-28)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.1.0"></a>
# [0.1.0](https://github.com/randytarampi/me/compare/v0.0.11...v0.1.0) (2018-07-28)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.0.11"></a>
## [0.0.11](https://github.com/randytarampi/me/compare/v0.0.10...v0.0.11) (2018-07-27)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.0.10"></a>
## [0.0.10](https://github.com/randytarampi/me/compare/v0.0.9...v0.0.10) (2018-07-27)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.0.9"></a>
## [0.0.9](https://github.com/randytarampi/me/compare/v0.0.8...v0.0.9) (2018-07-27)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.0.8"></a>
## [0.0.8](https://github.com/randytarampi/me/compare/v0.0.7...v0.0.8) (2018-07-27)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.0.7"></a>
## [0.0.7](https://github.com/randytarampi/me/compare/v0.0.6...v0.0.7) (2018-07-27)

**Note:** Version bump only for package @randy.tarampi/pseudoimage





<a name="0.0.6"></a>
## 0.0.6 (2018-07-27)

**Note:** Version bump only for package @randy.tarampi/pseudoimage
