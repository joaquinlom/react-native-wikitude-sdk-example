//
//  RenderingPluginModule.hpp
//  WikitudeUniversalSDK
//
//  Created by Andreas Schacherbauer on 17.06.18.
//  Copyright © 2018 Wikitude. All rights reserved.
//

#ifndef RenderingPluginModule_hpp
#define RenderingPluginModule_hpp

#ifdef __cplusplus

#include "PluginModule.hpp"
#include "CompilerAttributes.hpp"


namespace wikitude { namespace sdk {

    namespace impl {


        class WT_EXPORT_API RenderingPluginModule : public PluginModule {
        public:
            virtual ~RenderingPluginModule() = default;
        };
    }
    using impl::RenderingPluginModule;
}}

#endif /* __cplusplus */

#endif /* RenderingPluginModule_hpp */
