//
//  ManagedCameraFrame.hpp
//  CommonLibrary
//
//  Created by Andreas Schacherbauer on 30.11.17.
//  Copyright © 2017 Wikitude. All rights reserved.
//

#ifndef ManagedCameraFrame_hpp
#define ManagedCameraFrame_hpp

#ifdef __cplusplus

#include <mutex>
#include <memory>
#include <functional>

#include "CameraFrame.hpp"
#include "CompilerAttributes.hpp"


namespace wikitude { namespace sdk {

    namespace impl {


        class CameraFramePlane;
        class WT_EXPORT_API ManagedCameraFrame {
        public:
            ManagedCameraFrame(); /* delete me because I can’t be constructed without a sdk::CameraFrame */

            ManagedCameraFrame(const CameraFrame& frameInfo_);

            ManagedCameraFrame(ManagedCameraFrame& other_);

            /* dtor impl. not needed as the Wikitude SDK is calling lockForCopy(), copyIfNeeded() and unlockAfterCopy() when the lifetime of the FrameObject ends */
            virtual ~ManagedCameraFrame() = default;

            ManagedCameraFrame& operator = (ManagedCameraFrame& other_);

            long getId() const;
            std::int64_t getColorTimestamp() const;
            const ColorCameraFrameMetadata& getColorMetadata() const;

            const CameraFrame& getCameraFrame(){return _cameraFrame;}

            const std::vector<CameraFramePlane>& get();

            bool hasPose() const;
            const Matrix4& getPose() const;

            void addRequestor();
            const std::vector<CameraFramePlane>& getRequestedData();

            void lockForCopy();
            void copyIfNeeded();
            void unlockAfterCopy();

        protected:
            void addOwner(ManagedCameraFrame& other_);

            /**
             * overrite this method to keep track if the copy was actually done.
             *
             * For now the purpose of this method is to test this class. It should not be overritten in production code.
             */
            virtual void copyWasNeeded();

        protected:
            CameraFrame                                         _cameraFrame;

            std::shared_ptr<std::vector<CameraFramePlane>>      _safeStorage;
            std::shared_ptr<std::mutex>                         _safeStorageMutex;
            std::shared_ptr<int>                                _refCount = nullptr;
        };
    }
    using impl::ManagedCameraFrame;
}}

#endif /* ManagedCameraFrame_hpp */

#endif /* __cplusplus */
